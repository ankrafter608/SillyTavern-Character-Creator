import { FC, useState, useCallback } from 'react';
import { STButton, STTextarea } from 'sillytavern-utils-lib/components/react';
import { st_echo } from 'sillytavern-utils-lib/config';
import { Session } from '../generate.js';
import { ChatInterface } from './ChatInterface.js';

interface AutonomousModeProps {
    session: Session;
    onSessionUpdate: (session: Session) => void;
    onGenerateFullCharacter: (prompt: string, includeLorebook: boolean) => Promise<void>;
    isGenerating: boolean;
    profileId: string;
}

export const AutonomousMode: FC<AutonomousModeProps> = ({
    session,
    onSessionUpdate,
    onGenerateFullCharacter,
    isGenerating,
    profileId,
}) => {
    const [prompt, setPrompt] = useState('');
    const [includeLorebook, setIncludeLorebook] = useState(false);
    const [showChat, setShowChat] = useState(false);

    const handleGenerate = useCallback(async () => {
        if (!prompt.trim()) {
            st_echo('warning', 'Please enter a character description.');
            return;
        }
        if (!profileId) {
            st_echo('warning', 'Please select a connection profile.');
            return;
        }

        await onGenerateFullCharacter(prompt, includeLorebook);
        setShowChat(true);
    }, [prompt, includeLorebook, profileId, onGenerateFullCharacter]);

    return (
        <div className="autonomous-mode">
            <div className="autonomous-content">
                <div className="autonomous-left">
                    <div className="card">
                        <h3>Autonomous Character Generator</h3>
                        <p className="help-text">
                            Describe your character in one prompt, and the AI will generate all fields automatically.
                        </p>

                        <STTextarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Example: Create a female elf warrior, skilled in archery, who protects her forest home. She is brave but cautious around strangers, and has a deep connection with nature."
                            rows={8}
                            className="autonomous-prompt"
                        />

                        <label className="checkbox_label">
                            <input
                                type="checkbox"
                                checked={includeLorebook}
                                onChange={(e) => setIncludeLorebook(e.target.checked)}
                            />
                            {' '}Generate Lorebook (World Info)
                        </label>

                        <div className="button-group">
                            <STButton
                                onClick={handleGenerate}
                                disabled={isGenerating || !prompt.trim()}
                                className="menu_button"
                            >
                                {isGenerating ? 'Generating...' : 'Generate Full Character'}
                            </STButton>

                            {showChat && (
                                <STButton
                                    onClick={() => setShowChat(!showChat)}
                                    className="menu_button secondary"
                                >
                                    {showChat ? 'Hide Chat' : 'Show Chat'}
                                </STButton>
                            )}
                        </div>

                        <div className="autonomous-tips">
                            <h4>Tips for better results:</h4>
                            <ul>
                                <li>Include physical appearance, personality traits, and background</li>
                                <li>Mention the setting or world they inhabit</li>
                                <li>Describe their goals, fears, or motivations</li>
                                <li>Specify their speaking style or mannerisms</li>
                                <li>Add unique quirks or memorable details</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {showChat && (
                    <div className="autonomous-right">
                        <ChatInterface
                            session={session}
                            onSessionUpdate={onSessionUpdate}
                            profileId={profileId}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
