import { FC, useState, useCallback } from 'react';
import { STButton, STTextarea } from 'sillytavern-utils-lib/components/react';

export interface LorebookEntry {
    id: string;
    keys: string[];
    secondary_keys: string[];
    content: string;
    comment: string;
    enabled: boolean;
    constant: boolean;
    selective: boolean;
    insertion_order: number;
    position: 'before_char' | 'after_char';
}

export interface LorebookData {
    name: string;
    description: string;
    scan_depth: number;
    token_budget: number;
    recursive_scanning: boolean;
    entries: LorebookEntry[];
}

interface LorebookEditorProps {
    lorebook: LorebookData;
    onLorebookChange: (lorebook: LorebookData) => void;
    isGenerating?: string | null;
    onGenerateEntry?: (entryId: string) => void;
}

const createEmptyEntry = (): LorebookEntry => ({
    id: `entry_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    keys: [],
    secondary_keys: [],
    content: '',
    comment: '',
    enabled: true,
    constant: false,
    selective: false,
    insertion_order: 0,
    position: 'before_char',
});

export const LorebookEditor: FC<LorebookEditorProps> = ({
    lorebook,
    onLorebookChange,
    isGenerating,
    onGenerateEntry,
}) => {
    const [activeEntryId, setActiveEntryId] = useState<string | null>(
        lorebook.entries.length > 0 ? lorebook.entries[0].id : null
    );

    const handleAddEntry = useCallback(() => {
        const newEntry = createEmptyEntry();
        onLorebookChange({
            ...lorebook,
            entries: [...lorebook.entries, newEntry],
        });
        setActiveEntryId(newEntry.id);
    }, [lorebook, onLorebookChange]);

    const handleDeleteEntry = useCallback(
        async (entryId: string) => {
            const globalContext = SillyTavern.getContext();
            const entry = lorebook.entries.find((e) => e.id === entryId);
            const confirm = await globalContext.Popup.show.confirm(
                'Delete Entry',
                `Delete "${entry?.comment || 'Untitled Entry'}"?`
            );
            if (confirm) {
                const newEntries = lorebook.entries.filter((e) => e.id !== entryId);
                onLorebookChange({ ...lorebook, entries: newEntries });
                if (activeEntryId === entryId) {
                    setActiveEntryId(newEntries.length > 0 ? newEntries[0].id : null);
                }
            }
        },
        [lorebook, onLorebookChange, activeEntryId]
    );

    const handleEntryChange = useCallback(
        (entryId: string, field: keyof LorebookEntry, value: any) => {
            const newEntries = lorebook.entries.map((entry) =>
                entry.id === entryId ? { ...entry, [field]: value } : entry
            );
            onLorebookChange({ ...lorebook, entries: newEntries });
        },
        [lorebook, onLorebookChange]
    );

    const handleKeysChange = useCallback(
        (entryId: string, keysString: string, isSecondary: boolean = false) => {
            const keys = keysString
                .split(',')
                .map((k) => k.trim())
                .filter((k) => k.length > 0);
            handleEntryChange(entryId, isSecondary ? 'secondary_keys' : 'keys', keys);
        },
        [handleEntryChange]
    );

    const handleSettingChange = useCallback(
        <K extends keyof LorebookData>(key: K, value: LorebookData[K]) => {
            onLorebookChange({ ...lorebook, [key]: value });
        },
        [lorebook, onLorebookChange]
    );

    const activeEntry = lorebook.entries.find((e) => e.id === activeEntryId);

    return (
        <div className="lorebook-editor">
            {/* Lorebook Settings */}
            <div className="card lorebook-settings">
                <h3>📚 Lorebook Settings</h3>
                <div className="settings-grid">
                    <label>
                        Name
                        <input
                            type="text"
                            className="text_pole"
                            value={lorebook.name}
                            onChange={(e) => handleSettingChange('name', e.target.value)}
                            placeholder="My Lorebook"
                        />
                    </label>
                    <label>
                        Scan Depth
                        <input
                            type="number"
                            className="text_pole"
                            value={lorebook.scan_depth}
                            onChange={(e) => handleSettingChange('scan_depth', e.target.value === '' ? 0 : parseInt(e.target.value))}
                            min={0}
                            max={100}
                        />
                    </label>
                    <label>
                        Token Budget
                        <input
                            type="number"
                            className="text_pole"
                            value={lorebook.token_budget}
                            onChange={(e) => handleSettingChange('token_budget', e.target.value === '' ? 0 : parseInt(e.target.value))}
                            min={0}
                        />
                    </label>
                    <label className="checkbox_label">
                        <input
                            type="checkbox"
                            checked={lorebook.recursive_scanning}
                            onChange={(e) => handleSettingChange('recursive_scanning', e.target.checked)}
                        />
                        Recursive Scanning
                    </label>
                </div>
            </div>

            {/* Entries List + Editor */}
            <div className="lorebook-content">
                {/* Entries Sidebar */}
                <div className="entries-sidebar">
                    <div className="entries-header">
                        <h4>Entries ({lorebook.entries.length})</h4>
                        <STButton onClick={handleAddEntry} className="menu_button small">
                            <i className="fa-solid fa-plus"></i>
                        </STButton>
                    </div>
                    <div className="entries-list">
                        {lorebook.entries.length === 0 ? (
                            <div className="empty-state">
                                <p>No entries yet</p>
                                <STButton onClick={handleAddEntry}>
                                    <i className="fa-solid fa-plus"></i> Add Entry
                                </STButton>
                            </div>
                        ) : (
                            lorebook.entries.map((entry, index) => (
                                <div
                                    key={entry.id}
                                    className={`entry-item ${activeEntryId === entry.id ? 'active' : ''} ${!entry.enabled ? 'disabled' : ''
                                        }`}
                                    onClick={() => setActiveEntryId(entry.id)}
                                >
                                    <div className="entry-item-header">
                                        <span className="entry-index">#{index + 1}</span>
                                        <span className="entry-title">
                                            {entry.comment || entry.keys.join(', ') || 'Untitled'}
                                        </span>
                                        {entry.constant && (
                                            <i className="fa-solid fa-thumbtack" title="Always Active"></i>
                                        )}
                                    </div>
                                    <div className="entry-keys-preview">
                                        {entry.keys.slice(0, 3).join(', ')}
                                        {entry.keys.length > 3 && ` +${entry.keys.length - 3}`}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Entry Editor */}
                <div className="entry-editor">
                    {activeEntry ? (
                        <>
                            <div className="entry-editor-header">
                                <h4>{activeEntry.comment || 'Edit Entry'}</h4>
                                <div className="entry-actions">
                                    {onGenerateEntry && (
                                        <STButton
                                            onClick={() => onGenerateEntry(activeEntry.id)}
                                            disabled={isGenerating === activeEntry.id}
                                            className="menu_button small"
                                            title="Generate with AI"
                                        >
                                            {isGenerating === activeEntry.id ? (
                                                <i className="fa-solid fa-spinner fa-spin"></i>
                                            ) : (
                                                <i className="fa-solid fa-wand-magic-sparkles"></i>
                                            )}
                                        </STButton>
                                    )}
                                    <STButton
                                        onClick={() => handleDeleteEntry(activeEntry.id)}
                                        className="menu_button small danger"
                                        title="Delete Entry"
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </STButton>
                                </div>
                            </div>

                            <div className="entry-form">
                                <label>
                                    Title / Comment
                                    <input
                                        type="text"
                                        className="text_pole"
                                        value={activeEntry.comment}
                                        onChange={(e) =>
                                            handleEntryChange(activeEntry.id, 'comment', e.target.value)
                                        }
                                        placeholder="Entry title or description"
                                    />
                                </label>

                                <label>
                                    Keys (comma separated)
                                    <input
                                        type="text"
                                        className="text_pole"
                                        value={activeEntry.keys.join(', ')}
                                        onChange={(e) => handleKeysChange(activeEntry.id, e.target.value)}
                                        placeholder="keyword1, keyword2, keyword3"
                                    />
                                </label>

                                <label>
                                    Secondary Keys (optional, comma separated)
                                    <input
                                        type="text"
                                        className="text_pole"
                                        value={activeEntry.secondary_keys.join(', ')}
                                        onChange={(e) => handleKeysChange(activeEntry.id, e.target.value, true)}
                                        placeholder="filter1, filter2"
                                    />
                                </label>

                                <label>
                                    Content
                                    <STTextarea
                                        value={activeEntry.content}
                                        onChange={(e) =>
                                            handleEntryChange(activeEntry.id, 'content', e.target.value)
                                        }
                                        rows={8}
                                        placeholder="The lore content that will be injected when keys are triggered..."
                                    />
                                </label>

                                <div className="entry-options">
                                    <label className="checkbox_label">
                                        <input
                                            type="checkbox"
                                            checked={activeEntry.enabled}
                                            onChange={(e) =>
                                                handleEntryChange(activeEntry.id, 'enabled', e.target.checked)
                                            }
                                        />
                                        Enabled
                                    </label>
                                    <label className="checkbox_label">
                                        <input
                                            type="checkbox"
                                            checked={activeEntry.constant}
                                            onChange={(e) =>
                                                handleEntryChange(activeEntry.id, 'constant', e.target.checked)
                                            }
                                        />
                                        Always Active
                                    </label>
                                    <label className="checkbox_label">
                                        <input
                                            type="checkbox"
                                            checked={activeEntry.selective}
                                            onChange={(e) =>
                                                handleEntryChange(activeEntry.id, 'selective', e.target.checked)
                                            }
                                        />
                                        Selective
                                    </label>
                                </div>

                                <div className="entry-advanced">
                                    <label>
                                        Insertion Order
                                        <input
                                            type="number"
                                            className="text_pole small"
                                            value={activeEntry.insertion_order}
                                            onChange={(e) =>
                                                handleEntryChange(
                                                    activeEntry.id,
                                                    'insertion_order',
                                                    e.target.value === '' ? 0 : parseInt(e.target.value)
                                                )
                                            }
                                        />
                                    </label>
                                    <label>
                                        Position
                                        <select
                                            className="text_pole"
                                            value={activeEntry.position}
                                            onChange={(e) =>
                                                handleEntryChange(
                                                    activeEntry.id,
                                                    'position',
                                                    e.target.value as 'before_char' | 'after_char'
                                                )
                                            }
                                        >
                                            <option value="before_char">Before Character</option>
                                            <option value="after_char">After Character</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="empty-editor">
                            <i className="fa-solid fa-book-open"></i>
                            <p>Select an entry or create a new one</p>
                            <STButton onClick={handleAddEntry}>
                                <i className="fa-solid fa-plus"></i> Create Entry
                            </STButton>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export const createEmptyLorebook = (): LorebookData => ({
    name: 'New Lorebook',
    description: '',
    scan_depth: 4,
    token_budget: 2048,
    recursive_scanning: false,
    entries: [],
});
