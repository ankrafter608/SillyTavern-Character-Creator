import { FC, useState, useCallback, useRef, useEffect } from 'react';
import { STButton, STTextarea } from 'sillytavern-utils-lib/components/react';
import { st_echo } from 'sillytavern-utils-lib/config';
import { Session } from '../generate.js';
import { sendChatMessage, ChatMessage } from '../autonomous-generator.js';
import { KBFile } from './KnowledgeBase.js';

interface ChatInterfaceProps {
    session: Session;
    onSessionUpdate: (session: Session) => void;
    profileId: string;
    maxResponseToken?: number;
    kbFiles?: KBFile[];
    messages: ChatMessage[];
    onMessagesChange: (messages: ChatMessage[]) => void;
    additionalInstructions?: string;
}

export const ChatInterface: FC<ChatInterfaceProps> = ({
    session,
    onSessionUpdate,
    profileId,
    maxResponseToken,
    kbFiles,
    messages,
    onMessagesChange,
    additionalInstructions,
}) => {
    const [input, setInput] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages.length]);

    const handleSend = useCallback(async () => {
        if (!input.trim() || isProcessing) return;

        const userMessage: ChatMessage = {
            role: 'user',
            content: input.trim(),
            timestamp: Date.now(),
        };

        const newMessages = [...messages, userMessage];
        onMessagesChange(newMessages);
        setInput('');
        setIsProcessing(true);

        try {
            const { aiMessage, updatedSession } = await sendChatMessage({
                messages: newMessages,
                session,
                profileId,
                maxResponseToken,
                kbFiles,
                additionalInstructions,
            });

            onMessagesChange([...newMessages, aiMessage]);
            onSessionUpdate(updatedSession);
        } catch (error: any) {
            console.error('Chat error:', error);
            st_echo('error', `Chat error: ${error.message || String(error)}`);

            const errorMessage: ChatMessage = {
                role: 'assistant',
                content: `Error occurred: ${error.message || String(error)}`,
                timestamp: Date.now(),
                isError: true,
            };
            onMessagesChange([...newMessages, errorMessage]);
        } finally {
            setIsProcessing(false);
        }
    }, [input, messages, session, profileId, onSessionUpdate, isProcessing, onMessagesChange, maxResponseToken, kbFiles]);

    const handleDeleteMessage = useCallback((index: number) => {
        const newMessages = messages.filter((_, i) => i !== index);
        onMessagesChange(newMessages);
    }, [messages, onMessagesChange]);

    const handleKeyPress = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        },
        [handleSend],
    );

    const handleClearChat = useCallback(async () => {
        const globalContext = SillyTavern.getContext();
        const confirm = await globalContext.Popup.show.confirm(
            'Clear Chat',
            'Are you sure you want to clear the chat history?',
        );
        if (confirm) {
            onMessagesChange([]);
        }
    }, [onMessagesChange]);

    return (
        <div className="chat-interface">
            <div className="chat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 15px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <h3>AI Assistant</h3>
                <STButton onClick={handleClearChat} className="menu_button secondary small">
                    Clear
                </STButton>
            </div>

            <div className="chat-messages">
                {messages.length === 0 && (
                    <div className="chat-welcome">
                        <p>👋 Hi! I'm your AI assistant for character creation.</p>
                        <p>
                            I can help you refine your character by answering questions or making adjustments.
                            Just tell me what you'd like to change!
                        </p>
                        <div className="chat-examples">
                            <p><strong>Examples:</strong></p>
                            <ul>
                                <li>"Make her more mysterious"</li>
                                <li>"Add a tragic backstory"</li>
                                <li>"Change the setting to a cyberpunk city"</li>
                                <li>"Make the dialogue more formal"</li>
                            </ul>
                        </div>
                    </div>
                )}

                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.role} ${msg.isError ? 'error-message' : ''}`}>
                        {/* Trash can icon for deleting message */}
                        <div
                            className="message-actions"
                            style={{
                                opacity: 0.3,
                                cursor: 'pointer',
                                padding: '5px',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                            onClick={() => handleDeleteMessage(index)}
                            title="Delete message"
                        >
                            <i className="fa-solid fa-trash-can"></i>
                        </div>

                        <div className="message-content">
                            <div className="message-text" style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</div>
                            {msg.fieldsUpdated && msg.fieldsUpdated.length > 0 && (
                                <div className="message-updates">
                                    <small>
                                        ✏️ Updated: {msg.fieldsUpdated.join(', ')}
                                    </small>
                                </div>
                            )}
                        </div>
                        <div className="message-avatar">
                            {msg.role === 'user' ? '👤' : '🤖'}
                        </div>
                    </div>
                ))}

                {isProcessing && (
                    <div className="chat-message assistant">
                        <div className="message-content">
                            <div className="message-text typing">
                                <span>.</span><span>.</span><span>.</span>
                            </div>
                        </div>
                        <div className="message-avatar">🤖</div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            <div className="chat-input-area">
                <STTextarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message... (Enter to send, Shift+Enter for new line)"
                    rows={3}
                    disabled={isProcessing}
                    className="chat-input"
                    style={{ flex: 1 }}
                />
                <button
                    onClick={handleSend}
                    disabled={!input.trim() || isProcessing}
                    style={{
                        borderRadius: '50%',
                        width: '42px',
                        height: '42px',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--accent-gradient)',
                        border: 'none',
                        cursor: (!input.trim() || isProcessing) ? 'not-allowed' : 'pointer',
                        opacity: (!input.trim() || isProcessing) ? 0.7 : 1
                    }}
                >
                    <i className="fa-solid fa-paper-plane" style={{ color: 'white' }}></i>
                </button>
            </div>
        </div>
    );
};
