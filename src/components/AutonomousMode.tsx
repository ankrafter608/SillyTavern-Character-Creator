import { FC } from 'react';
import { Session } from '../generate.js';
import { ChatInterface } from './ChatInterface.js';
import { ChatMessage } from '../autonomous-generator.js';
import { settingsManager } from '../settings.js';
import { STButton } from 'sillytavern-utils-lib/components/react';
import { useForceUpdate } from '../hooks/useForceUpdate.js';

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
    const forceUpdate = useForceUpdate();
    const settings = settingsManager.getSettings();

    const toggleSound = () => {
        if (!settings.soundNotifications) settings.soundNotifications = { enabled: true, volume: 0.5 };
        settings.soundNotifications.enabled = !settings.soundNotifications.enabled;
        settingsManager.saveSettings();
        forceUpdate();
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!settings.soundNotifications) settings.soundNotifications = { enabled: true, volume: 0.5 };
        settings.soundNotifications.volume = parseFloat(e.target.value);
        settingsManager.saveSettings();
        forceUpdate();
    };

    return (
        <div className="autonomous-mode chat-only">
            {/* 
            <div className="autonomous-controls card" style={{ padding: '10px 15px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <STButton
                        onClick={toggleSound}
                        className={settings.soundNotifications?.enabled ? '' : 'secondary'}
                        title={settings.soundNotifications?.enabled ? 'Mute sounds' : 'Unmute sounds'}
                    >
                        <i className={`fa-solid ${settings.soundNotifications?.enabled ? 'fa-volume-high' : 'fa-volume-xmark'}`}></i>
                    </STButton>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={settings.soundNotifications?.volume ?? 0.5}
                        onChange={handleVolumeChange}
                        style={{ width: '100px' }}
                    />
                    <span style={{ fontSize: '0.8em', opacity: 0.6, width: '35px' }}>
                        {Math.round((settings.soundNotifications?.volume ?? 0.5) * 100)}%
                    </span>
                </div>
                <div style={{ flexGrow: 1 }}></div>
                <span style={{ fontSize: '0.9em', opacity: 0.7 }}>
                    <i className="fa-solid fa-circle-info" style={{ marginRight: '5px' }}></i>
                    Sounds play on AI response and errors
                </span>
            </div>
            */}
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
