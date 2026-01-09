import { FC, useState } from 'react';
import { Session } from '../generate.js';
import { ChatInterface } from './ChatInterface.js';
import { ChatMessage } from '../autonomous-generator.js';

interface AutonomousModeProps {
    session: Session;
    onSessionUpdate: (session: Session) => void;
    onGenerateFullCharacter: (prompt: string, includeLorebook: boolean) => Promise<void>; // Kept for prop compatibility
    isGenerating: boolean;
    profileId: string;
    additionalInstructions?: string;
}

export const AutonomousMode: FC<AutonomousModeProps> = ({
    session,
    onSessionUpdate,
    profileId,
    additionalInstructions,
}) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    return (
        <div className="autonomous-mode chat-only">
            <div className="autonomous-content">
                <div className="autonomous-chat-full">
                    <ChatInterface
                        session={session}
                        onSessionUpdate={onSessionUpdate}
                        profileId={profileId}
                        messages={messages}
                        onMessagesChange={setMessages}
                        additionalInstructions={additionalInstructions}
                    />
                </div>
            </div>
        </div>
    );
};
