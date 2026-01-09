import { FC, useRef } from 'react';
import { STButton } from 'sillytavern-utils-lib/components/react';

export interface KBFile {
    id: string;
    name: string;
    content: string;
    enabled: boolean;
    size: number;
}

interface KnowledgeBaseProps {
    files: KBFile[];
    onFilesChange: (files: KBFile[]) => void;
}

export const KnowledgeBase: FC<KnowledgeBaseProps> = ({ files, onFilesChange }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = Array.from(e.target.files || []);
        if (uploadedFiles.length === 0) return;

        const newFiles: KBFile[] = [];
        let processedCount = 0;

        uploadedFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const content = event.target?.result as string;
                // Basic binary check (look for null bytes) - simple heuristic
                if (content.indexOf('\0') !== -1) {
                    console.warn(`File ${file.name} appears to be binary, skipping.`);
                    // Optionally show a toast here via globalContext
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
                    // Append new files to existing ones
                    onFilesChange([...files, ...newFiles]);
                    // Reset input
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

    return (
        <div className="card knowledge-base">
            <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ margin: 0 }}>🧠 Knowledge Base</h3>
                <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileUpload}
                    accept=".txt,.md,.json,.csv,.xml,.yml,.yaml"
                />
                <STButton onClick={() => fileInputRef.current?.click()} className="menu_button small">
                    <i className="fa-solid fa-upload"></i> Attach
                </STButton>
            </div>

            <div className="kb-files-list" style={{ maxHeight: '150px', overflowY: 'auto' }}>
                {files.length === 0 ? (
                    <div style={{ opacity: 0.6, fontSize: '0.9em', textAlign: 'center', padding: '10px' }}>
                        No files attached. Upload context files here.
                    </div>
                ) : (
                    files.map(file => (
                        <div key={file.id} className="kb-file-item" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '6px 8px',
                            background: 'var(--black10a)',
                            marginBottom: '4px',
                            borderRadius: '4px',
                            border: '1px solid transparent'
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
                                <span style={{ fontSize: '0.75em', opacity: 0.6, whiteSpace: 'nowrap' }}>
                                    ({Math.round(file.size / 1024)}KB)
                                </span>
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
            <div style={{ marginTop: '8px', fontSize: '0.8em', opacity: 0.7, borderTop: '1px solid var(--white10a)', paddingTop: '4px' }}>
                {files.filter(f => f.enabled).length} active files will be sent to AI.
            </div>
        </div>
    );
};
