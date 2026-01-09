import { FC } from 'react';
import { STButton } from 'sillytavern-utils-lib/components/react';
import { settingsManager } from '../settings.js';
import { useForceUpdate } from '../hooks/useForceUpdate.js';

export const CharacterCreatorSettings: FC = () => {
  const forceUpdate = useForceUpdate();
  const settings = settingsManager.getSettings();

  const toggleSound = () => {
    if (!settings.soundNotifications) {
      settings.soundNotifications = { enabled: true, volume: 0.5 };
    }
    settings.soundNotifications.enabled = !settings.soundNotifications.enabled;
    settingsManager.saveSettings();
    forceUpdate();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!settings.soundNotifications) {
      settings.soundNotifications = { enabled: true, volume: 0.5 };
    }
    settings.soundNotifications.volume = parseFloat(e.target.value);
    settingsManager.saveSettings();
    forceUpdate();
  };

  const playTestSound = (type: 'success' | 'error') => {
    const volume = settings.soundNotifications?.volume ?? 0.5;
    const audio = new Audio(`scripts/extensions/third-party/SillyTavern-Character-Creator/templates/${type}.wav`);
    audio.volume = volume;
    audio.play().catch(e => console.error('Failed to play test sound:', e));
  };

  return (
    <div className="settings-container">
      <h3>Extension Settings</h3>

      <div className="settings-section card">
        <h4><i className="fa-solid fa-volume-high"></i> Sound Notifications</h4>
        <div className="settings-row" style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '15px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <STButton
              onClick={toggleSound}
              className={settings.soundNotifications?.enabled ? 'confirm' : 'secondary'}
            >
              <i className={`fa-solid ${settings.soundNotifications?.enabled ? 'fa-bell' : 'fa-bell-slash'}`}></i>
              {settings.soundNotifications?.enabled ? ' Enabled' : ' Disabled'}
            </STButton>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexGrow: 1 }}>
            <label>Volume:</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={settings.soundNotifications?.volume ?? 0.5}
              onChange={handleVolumeChange}
              style={{ flexGrow: 1 }}
            />
            <span style={{ minWidth: '40px', textAlign: 'right', fontFamily: 'monospace' }}>
              {Math.round((settings.soundNotifications?.volume ?? 0.5) * 100)}%
            </span>
          </div>
        </div>

        <div className="settings-row test-buttons" style={{ display: 'flex', gap: '10px' }}>
          <STButton onClick={() => playTestSound('success')} className="small">
            <i className="fa-solid fa-play"></i> Test Success
          </STButton>
          <STButton onClick={() => playTestSound('error')} className="small">
            <i className="fa-solid fa-play"></i> Test Error
          </STButton>
        </div>

        <p className="help-text" style={{ marginTop: '10px', opacity: 0.6, fontSize: '0.9em' }}>
          Sounds will play when AI finishes generating a response or when an error occurs.
        </p>
      </div>

      <div className="settings-section card" style={{ marginTop: '20px' }}>
        <h4><i className="fa-solid fa-info-circle"></i> About</h4>
        <p>Character Creator Extension v0.3.0</p>
        <p style={{ opacity: 0.7 }}>A powerful tool for generating and refining SillyTavern characters with AI assistance.</p>
      </div>
    </div>
  );
};
