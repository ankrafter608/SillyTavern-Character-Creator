import { FC, useRef, useState, useEffect } from 'react';
import { STButton } from 'sillytavern-utils-lib/components/react';
import { settingsManager } from '../settings.js';

export interface KBFile {
    id: string;
    name: string;
    content: string;
    enabled: boolean;
    size: number;
    tokens?: number;
}

interface KnowledgeBaseProps {
    files: KBFile[];
    onFilesChange: (files: KBFile[]) => void;
}

const globalContext = SillyTavern.getContext();

const TOKENIZER_OPTIONS = [
    { id: 13, name: 'Gemma' },
    { id: 12, name: 'Llama 3' },
    { id: 3, name: 'Llama 2' },
    { id: 7, name: 'Mistral' },
    { id: 2, name: 'OpenAI (GPT-4)' },
    { id: 11, name: 'Claude' },
];

export const KnowledgeBase: FC<KnowledgeBaseProps> = ({ files, onFilesChange }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedTokenizer, setSelectedTokenizer] = useState(settingsManager.getSettings().preferredTokenizer || 13);
    const [isCalculating, setIsCalculating] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = Array.from(e.target.files || []);
        if (uploadedFiles.length === 0) return;

        const newFiles: KBFile[] = [];
        let processedCount = 0;

        uploadedFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const content = event.target?.result as string;
                if (content.indexOf('\0') !== -1) {
                    console.warn(`File ${file.name} appears to be binary, skipping.`);
                } else {
                    newFiles.push({
                        id: `kb_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                        name: file.name,
                        content: content,
                        enabled: true,
                        size: file.size
                    });
                }

                processedCount++;
                if (processedCount === uploadedFiles.length) {
                    onFilesChange([...files, ...newFiles]);
                    if (fileInputRef.current) fileInputRef.current.value = '';
                }
            };
            reader.readAsText(file);
        });
    };

    const toggleFile = (id: string) => {
        onFilesChange(files.map(f => f.id === id ? { ...f, enabled: !f.enabled } : f));
    };

    const deleteFile = (id: string) => {
        onFilesChange(files.filter(f => f.id !== id));
    };

    const clearAllFiles = async () => {
        const confirm = await globalContext.Popup.show.confirm(
            'Clear Knowledge Base',
            `Are you sure you want to remove all ${files.length} files from the knowledge base?`
        );
        if (confirm) {
            onFilesChange([]);
        }
    };

    const calculateTokens = async (toCalculate: KBFile[]) => {
        if (isCalculating || toCalculate.length === 0) return;
        setIsCalculating(true);

        try {
            const tokenizerUrlMap: Record<number, string> = {
                13: '/api/tokenizers/gemma/encode',
                12: '/api/tokenizers/llama3/encode',
                3: '/api/tokenizers/llama/encode',
                7: '/api/tokenizers/mistral/encode',
                2: '/api/tokenizers/openai/encode',
                11: '/api/tokenizers/claude/encode',
            };

            const url = tokenizerUrlMap[selectedTokenizer];
            const updatedFiles = [...files];

            const chunkSize = 15;
            for (let i = 0; i < updatedFiles.length; i += chunkSize) {
                const chunkIndices: number[] = [];
                for (let j = i; j < Math.min(i + chunkSize, updatedFiles.length); j++) {
                    if (updatedFiles[j].tokens === undefined) {
                        chunkIndices.push(j);
                    }
                }

                if (chunkIndices.length === 0) continue;

                await Promise.all(chunkIndices.map(async (idx) => {
                    try {
                        const file = updatedFiles[idx];
                        const response = await fetch(url, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ text: file.content }),
                        });
                        const data = await response.json();

                        // ST server typically returns { ids: [...] } for encode endpoints
                        if (data && data.ids && Array.isArray(data.ids)) {
                            updatedFiles[idx] = { ...file, tokens: data.ids.length };
                        } else if (Array.isArray(data)) {
                            updatedFiles[idx] = { ...file, tokens: data.length };
                        } else if (typeof data.token_count === 'number') {
                            updatedFiles[idx] = { ...file, tokens: data.token_count };
                        } else {
                            // Fallback to guesstimate if API fails or returns unexpected format
                            updatedFiles[idx] = { ...file, tokens: Math.ceil(file.content.length / 3.35) };
                        }
                    } catch (err) {
                        console.error(`Token count failed:`, err);
                        // Fallback to guesstimate
                        updatedFiles[idx] = { ...updatedFiles[idx], tokens: Math.ceil(updatedFiles[idx].content.length / 3.35) };
                    }
                }));
            }
            onFilesChange(updatedFiles);
        } finally {
            setIsCalculating(false);
        }
    };

    // Automatic calculation trigger
    useEffect(() => {
        const toCalculate = files.filter(f => f.tokens === undefined);
        if (toCalculate.length > 0 && !isCalculating) {
            calculateTokens(toCalculate);
        }
    }, [files, selectedTokenizer]);

    const handleTokenizerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newId = Number(e.target.value);
        setSelectedTokenizer(newId);

        // Update global settings
        const settings = settingsManager.getSettings();
        settings.preferredTokenizer = newId;
        settingsManager.saveSettings();

        // Reset tokens to trigger recalculation for all files
        onFilesChange(files.map(f => ({ ...f, tokens: undefined })));
    };

    const filteredFiles = files.filter(file =>
        file.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalActiveTokens = files
        .filter(f => f.enabled)
        .reduce((sum, f) => sum + (f.tokens || 0), 0);

    const totalFilesTokens = files.reduce((sum, f) => sum + (f.tokens || 0), 0);

    return (
        <div className="card knowledge-base">
            <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h3 style={{ margin: 0 }}>🧠 Knowledge Base</h3>
                    {isCalculating && (
                        <div style={{ fontSize: '0.8em', opacity: 0.6 }}>
                            <i className="fa-solid fa-spinner fa-spin"></i> Counting...
                        </div>
                    )}
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <select
                        value={selectedTokenizer}
                        onChange={handleTokenizerChange}
                        className="text_pole"
                        style={{ padding: '4px 8px', fontSize: '0.8em', width: 'auto' }}
                        title="Select tokenizer for counting"
                    >
                        {TOKENIZER_OPTIONS.map(opt => (
                            <option key={opt.id} value={opt.id}>{opt.name}</option>
                        ))}
                    </select>

                    <input
                        type="file"
                        multiple
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileUpload}
                        accept=".txt,.md,.json,.csv,.xml,.yml,.yaml"
                    />
                    {files.length > 0 && (
                        <STButton onClick={clearAllFiles} className="menu_button small danger_button">
                            <i className="fa-solid fa-trash-can"></i> Clear
                        </STButton>
                    )}
                    <STButton onClick={() => fileInputRef.current?.click()} className="menu_button small">
                        <i className="fa-solid fa-upload"></i> Attach
                    </STButton>
                </div>
            </div>

            <div className="kb-search-row" style={{ marginBottom: '12px', position: 'relative' }}>
                <i className="fa-solid fa-magnifying-glass" style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    opacity: 0.4,
                    pointerEvents: 'none'
                }}></i>
                <input
                    type="text"
                    className="text_pole"
                    placeholder="Search files by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '8px 12px 8px 35px',
                        fontSize: '0.9em',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(0, 0, 0, 0.2)'
                    }}
                />
            </div>

            <div className="kb-files-list" style={{ maxHeight: '200px', overflowY: 'auto', paddingRight: '4px' }}>
                {files.length === 0 ? (
                    <div style={{ opacity: 0.6, fontSize: '0.9em', textAlign: 'center', padding: '10px' }}>
                        No files attached. Upload context files here.
                    </div>
                ) : filteredFiles.length === 0 ? (
                    <div style={{ opacity: 0.4, fontSize: '0.9em', textAlign: 'center', padding: '20px' }}>
                        No files matching "{searchTerm}"
                    </div>
                ) : (
                    filteredFiles.map(file => (
                        <div key={file.id} className="kb-file-item" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '6px 8px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            marginBottom: '4px',
                            borderRadius: '4px',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden', flex: 1 }}>
                                <input
                                    type="checkbox"
                                    checked={file.enabled}
                                    onChange={() => toggleFile(file.id)}
                                    style={{ margin: 0 }}
                                />
                                <span title={file.name} style={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    fontSize: '0.9em',
                                    fontWeight: 500
                                }}>
                                    {file.name}
                                </span>
                                <div style={{ display: 'flex', gap: '4px', fontSize: '0.75em', opacity: 0.6, whiteSpace: 'nowrap' }}>
                                    <span>({Math.round(file.size / 1024)}KB)</span>
                                    {file.tokens !== undefined ? (
                                        <span style={{ color: '#818cf8' }}>• {file.tokens} tokens</span>
                                    ) : (
                                        <span style={{ opacity: 0.4 }}>• ...</span>
                                    )}
                                </div>
                            </div>
                            <div
                                onClick={() => deleteFile(file.id)}
                                style={{ cursor: 'pointer', opacity: 0.6, padding: '2px 6px' }}
                                title="Remove file"
                            >
                                <i className="fa-solid fa-times"></i>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="kb-footer" style={{
                marginTop: '12px',
                paddingTop: '12px',
                borderTop: '2px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div style={{ fontSize: '0.9em', opacity: 0.7 }}>
                        {searchTerm ? (
                            <>Found: <strong>{filteredFiles.length}</strong> / {files.length}</>
                        ) : (
                            <>Active: <strong>{files.filter(f => f.enabled).length}</strong> / {files.length} files</>
                        )}
                    </div>
                    {totalFilesTokens > 0 && (
                        <div style={{ fontSize: '0.8em', opacity: 0.5 }}>
                            Total Base: {totalFilesTokens.toLocaleString()} tokens
                        </div>
                    )}
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'var(--accent-gradient)',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    marginTop: '4px'
                }}>
                    <span style={{ fontWeight: 'bold', fontSize: '1em', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Tokens (Active)</span>
                    <span style={{ fontSize: '1.4em', fontWeight: '800', fontFamily: 'monospace' }}>
                        {totalActiveTokens.toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    );
};
