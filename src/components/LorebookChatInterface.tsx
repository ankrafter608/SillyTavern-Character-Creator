import { FC, useState, useCallback } from 'react';
import { STButton, STTextarea } from 'sillytavern-utils-lib/components/react';
import { LorebookData, LorebookEntry } from './LorebookEditor.js';

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
    entriesUpdated?: string[];
}

interface LorebookChatInterfaceProps {
    lorebook: LorebookData;
    onLorebookChange: (lorebook: LorebookData) => void;
    profileId: string;
    maxResponseToken?: number;
}

const globalContext = SillyTavern.getContext();

const LOREBOOK_CHAT_PROMPT = `You are an AI assistant specialized in creating World Info / Lorebook entries for roleplay AI systems.

Current Lorebook: "{{lorebookName}}"
Current Entries:
{{currentEntriesJson}}

User's request: {{userMessage}}

Your task is to help create, modify, or suggest Lorebook entries based on the user's request.

Each entry should have:
- comment: A title/name for the entry
- keys: Array of trigger words that activate this entry (comma-separated keywords)
- content: The lore information (2-5 sentences typically)
- constant: Set to true if entry should always be active
- enabled: Should be true by default

Return a JSON object with:
- "response": Your friendly explanation of what entries you created/modified (2-3 sentences)
- "newEntries": Array of NEW entries to add (each with: comment, keys, content, constant, enabled)
- "entriesUpdated": Array of entry comments/names that were affected

Example for creating entries about a fantasy kingdom:
\`\`\`json
{
  "response": "I've created 3 entries covering the Kingdom of Avalon: its geography, ruling family, and magical traditions.",
  "newEntries": [
    {
      "comment": "Kingdom of Avalon - Overview",
      "keys": ["Avalon", "kingdom", "realm"],
      "content": "The Kingdom of Avalon is a prosperous realm nestled between the Misty Mountains and the Azure Sea. Known for its ancient magical traditions and wise rulers.",
      "constant": false,
      "enabled": true
    },
    {
      "comment": "House Pendragon",
      "keys": ["Pendragon", "royal family", "king", "queen"],
      "content": "House Pendragon has ruled Avalon for over 500 years. The current monarch, King Arthur VII, is known for his just rule and powerful magic.",
      "constant": false,
      "enabled": true
    }
  ],
  "entriesUpdated": ["Kingdom of Avalon - Overview", "House Pendragon"]
}
\`\`\`

CRITICAL: Return ONLY valid JSON. No markdown code blocks around it, no explanations outside the JSON.
Focus ONLY on creating Lorebook entries. Do NOT modify any character data.`;

export const LorebookChatInterface: FC<LorebookChatInterfaceProps> = ({
    lorebook,
    onLorebookChange,
    profileId,
    maxResponseToken = 3072,
}) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = useCallback(async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = {
            role: 'user',
            content: input.trim(),
            timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const Handlebars = await import('handlebars');

            // Build current entries JSON
            const currentEntriesJson = lorebook.entries.length > 0
                ? JSON.stringify(lorebook.entries.map(e => ({
                    comment: e.comment,
                    keys: e.keys,
                    content: e.content.substring(0, 200) + (e.content.length > 200 ? '...' : ''),
                    constant: e.constant,
                    enabled: e.enabled,
                })), null, 2)
                : '[]';

            const template = Handlebars.compile(LOREBOOK_CHAT_PROMPT);
            const fullPrompt = template({
                lorebookName: lorebook.name,
                currentEntriesJson,
                userMessage: input.trim(),
            });

            const response = await globalContext.ConnectionManagerRequestService.sendRequest(
                profileId,
                [{ role: 'user', content: fullPrompt }],
                maxResponseToken,
            ) as any;

            if (!response || !response.content) {
                throw new Error('No response from AI');
            }

            // Parse response
            let jsonText = response.content.trim();

            // Extract JSON
            const codeBlockMatch = jsonText.match(/```(?:json)?\s*(\{[\s\S]*?)(?:```|$)/i);
            if (codeBlockMatch) {
                jsonText = codeBlockMatch[1];
            } else {
                const firstBrace = jsonText.indexOf('{');
                const lastBrace = jsonText.lastIndexOf('}');
                if (firstBrace !== -1 && lastBrace !== -1 && lastBrace >= firstBrace) {
                    jsonText = jsonText.substring(firstBrace, lastBrace + 1);
                }
            }

            let data;
            try {
                data = JSON.parse(jsonText);
            } catch (e) {
                console.warn('JSON parse failed for lorebook chat:', e);

                const fallbackMessage: ChatMessage = {
                    role: 'assistant',
                    content: `⚠️ I tried to generate entries but my response was malformed. Here's the raw output:\n\n${response.content}\n\n💡 Try increasing "Max Response Tokens" or simplifying your request.`,
                    timestamp: Date.now(),
                    entriesUpdated: [],
                };
                setMessages((prev) => [...prev, fallbackMessage]);
                setIsLoading(false);
                return;
            }

            // Add new entries to lorebook
            if (data.newEntries && Array.isArray(data.newEntries) && data.newEntries.length > 0) {
                const newLorebookEntries: LorebookEntry[] = data.newEntries.map((entry: any, index: number) => ({
                    id: `entry_${Date.now()}_${index}_${Math.random().toString(36).substr(2, 9)}`,
                    keys: Array.isArray(entry.keys) ? entry.keys : (entry.keys || '').split(',').map((k: string) => k.trim()),
                    secondary_keys: [],
                    content: entry.content || '',
                    comment: entry.comment || `Entry ${lorebook.entries.length + index + 1}`,
                    enabled: entry.enabled ?? true,
                    constant: entry.constant ?? false,
                    selective: false,
                    insertion_order: lorebook.entries.length + index,
                    position: 'before_char' as const,
                }));

                onLorebookChange({
                    ...lorebook,
                    entries: [...lorebook.entries, ...newLorebookEntries],
                });
            }

            const aiMessage: ChatMessage = {
                role: 'assistant',
                content: data.response || "I've updated the lorebook as requested.",
                timestamp: Date.now(),
                entriesUpdated: data.entriesUpdated || [],
            };

            setMessages((prev) => [...prev, aiMessage]);
        } catch (error: any) {
            console.error('Lorebook chat error:', error);
            const errorMessage: ChatMessage = {
                role: 'assistant',
                content: `Sorry, I encountered an error processing your request. Please try again.\n\nError: ${error.message || String(error)}`,
                timestamp: Date.now(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    }, [input, isLoading, lorebook, onLorebookChange, profileId, maxResponseToken]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="chat-interface">
            <div className="chat-messages">
                {messages.length === 0 && (
                    <div className="chat-welcome">
                        <span className="welcome-emoji">📚</span> Hi! I'm your AI assistant for Lorebook creation.
                        <p>I can help you create World Info entries for your setting. Just tell me what you need!</p>
                        <div className="chat-examples">
                            <p><strong>Examples:</strong></p>
                            <ul>
                                <li>"Create 3 entries about the Steins;Gate universe"</li>
                                <li>"Add entries for the main characters of Evangelion"</li>
                                <li>"Generate lore for a cyberpunk megacity"</li>
                                <li>"Create entries about magic systems in my fantasy world"</li>
                            </ul>
                        </div>
                    </div>
                )}
                {messages.map((msg, idx) => (
                    <div key={idx} className={`chat-message ${msg.role}`}>
                        <span className="message-icon">{msg.role === 'user' ? '👤' : '🤖'}</span>
                        <div className="message-content">
                            {msg.content}
                            {msg.entriesUpdated && msg.entriesUpdated.length > 0 && (
                                <div className="entries-updated">
                                    ✏️ Entries: {msg.entriesUpdated.join(', ')}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="chat-message assistant loading">
                        <span className="message-icon">🤖</span>
                        <div className="message-content">
                            <i className="fa-solid fa-spinner fa-spin"></i> Creating entries...
                        </div>
                    </div>
                )}
            </div>
            <div className="chat-input-area">
                <STTextarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Describe entries to create... (Enter to send, Shift+Enter for new line)"
                    rows={2}
                    disabled={isLoading}
                />
                <STButton onClick={handleSend} disabled={isLoading || !input.trim()}>
                    {isLoading ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Send'}
                </STButton>
            </div>
        </div>
    );
};
