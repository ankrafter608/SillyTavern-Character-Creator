import { FC, useState, useCallback, useRef, useEffect } from 'react';
import { STButton, STTextarea } from 'sillytavern-utils-lib/components/react';
import { st_echo } from 'sillytavern-utils-lib/config';
import { Session } from '../generate.js';
import { sendChatMessage, ChatMessage } from '../autonomous-generator.js';

interface ChatInterfaceProps {
    session: Session;
    onSessionUpdate: (session: Session) => void;
    profileId: string;
    maxResponseToken?: number;
}

export const ChatInterface: FC<ChatInterfaceProps> = ({
    session,
    onSessionUpdate,
    profileId,
    maxResponseToken,
}) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = useCallback(async () => {
        if (!input.trim() || isProcessing) return;

        const userMessage: ChatMessage = {
            role: 'user',
            content: input.trim(),
            timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsProcessing(true);

        try {
            const { aiMessage, updatedSession } = await sendChatMessage({
                messages: [...messages, userMessage],
                session,
                profileId,
                maxResponseToken,
            });

            setMessages((prev) => [...prev, aiMessage]);
            onSessionUpdate(updatedSession);
        } catch (error: any) {
            console.error('Chat error:', error);
            st_echo('error', `Chat error: ${error.message || String(error)}`);

            const errorMessage: ChatMessage = {
                role: 'assistant',
                content: 'Sorry, I encountered an error processing your request. Please try again.',
                timestamp: Date.now(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsProcessing(false);
        }
    }, [input, messages, session, profileId, onSessionUpdate, isProcessing]);

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
            setMessages([]);
        }
    }, []);

    return (
        <div className="chat-interface">
            <div className="chat-header">
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
                    <div key={index} className={`chat-message ${msg.role}`}>
                        <div className="message-avatar">
                            {msg.role === 'user' ? '👤' : '🤖'}
                        </div>
                        <div className="message-content">
                            <div className="message-text">{msg.content}</div>
                            {msg.fieldsUpdated && msg.fieldsUpdated.length > 0 && (
                                <div className="message-updates">
                                    <small>
                                        ✏️ Updated: {msg.fieldsUpdated.join(', ')}
                                    </small>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {isProcessing && (
                    <div className="chat-message assistant">
                        <div className="message-avatar">🤖</div>
                        <div className="message-content">
                            <div className="message-text typing">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            <div className="chat-input-container">
                <STTextarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message... (Enter to send, Shift+Enter for new line)"
                    rows={3}
                    disabled={isProcessing}
                    className="chat-input"
                />
                <STButton
                    onClick={handleSend}
                    disabled={!input.trim() || isProcessing}
                    className="menu_button send-button"
                >
                    Send
                </STButton>
            </div>
        </div>
    );
};
