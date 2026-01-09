import { FC } from 'react';
import { Session } from '../generate.js';
import { ChatInterface } from './ChatInterface.js';
import { ChatMessage } from '../autonomous-generator.js';

interface AutonomousModeProps {
    session: Session;
    onSessionUpdate: (session: Session) => void;
    onGenerateFullCharacter: (prompt: string, includeLorebook: boolean) => Promise<void>;
    isGenerating: boolean;
    profileId: string;
    additionalInstructions?: string;
    messages: ChatMessage[];
    onMessagesChange: (messages: ChatMessage[]) => void;
}

export const AutonomousMode: FC<AutonomousModeProps> = ({
    session,
    onSessionUpdate,
    profileId,
    additionalInstructions,
    messages,
    onMessagesChange,
}) => {
    return (
        <div className="autonomous-mode chat-only">
            <div className="autonomous-content">
                <div className="autonomous-chat-full">
                    <ChatInterface
                        session={session}
                        onSessionUpdate={onSessionUpdate}
                        profileId={profileId}
                        messages={messages}
                        onMessagesChange={onMessagesChange}
                        additionalInstructions={additionalInstructions}
                    />
                </div>
            </div>
        </div>
    );
};
