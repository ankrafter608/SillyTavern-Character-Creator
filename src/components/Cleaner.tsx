import { FC, useState, useMemo } from 'react';
import { STButton } from 'sillytavern-utils-lib/components/react';
import { KBFile } from './KnowledgeBase.js';
import { cleanFiles } from '../autonomous-generator.js';
import { st_echo } from 'sillytavern-utils-lib/config';
import { CleanerDiffPopup } from './CleanerDiffPopup.js';

interface PendingResult {
    id: string;
    originalName: string;
    originalContent: string;
    cleanedContent: string;
}

const downloadFile = (name: string, content: string) => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

interface CleanerProps {
    kbFiles: KBFile[];
    onFilesUpdate: (files: KBFile[]) => void;
    profileId: string;
    additionalInstructions?: string;
}

interface HistoryItem {
    name: string;
    status: 'accepted' | 'rejected';
    mode?: 'strip' | 'summary' | 'heavy_summary' | 'rejected';
    timestamp: number;
}

export const Cleaner: FC<CleanerProps> = ({
    kbFiles,
    onFilesUpdate,
    profileId,
    additionalInstructions,
}) => {
    const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
    const [isCleaning, setIsCleaning] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [reviewQueue, setReviewQueue] = useState<PendingResult[]>([]);
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [cleaningMode, setCleaningMode] = useState<'strip' | 'summary' | 'heavy_summary'>('strip');

    const filteredFiles = useMemo(() => {
        return kbFiles.filter(f =>
            f.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [kbFiles, searchQuery]);

    const toggleFile = (id: string) => {
        setSelectedFiles(prev =>
            prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
        );
    };

    const selectAll = () => {
        setSelectedFiles(filteredFiles.map(f => f.id));
    };

    const selectAllUnfiltered = () => {
        const unfilteredIds = filteredFiles
            .filter(f => !f.cleanMode || f.cleanMode === 'rejected')
            .map(f => f.id);
        setSelectedFiles(unfilteredIds);
    };

    const deselectAll = () => {
        setSelectedFiles([]);
    };

    const handleRevertSelected = () => {
        if (selectedFiles.length === 0) return;
        const newFiles = kbFiles.map(f =>
            selectedFiles.includes(f.id) && f.originalContent
                ? { ...f, content: f.originalContent, cleanMode: undefined }
                : f
        );
        onFilesUpdate(newFiles);
        st_echo('success', `Reverted ${selectedFiles.length} selected files to original.`);
    };

    const handleExportSelected = () => {
        const toExport = kbFiles.filter(f => selectedFiles.includes(f.id) && f.cleanMode && f.cleanMode !== 'rejected');
        if (toExport.length === 0) {
            st_echo('error', 'No cleaned files among selection to export.');
            return;
        }

        st_echo('info', `Downloading ${toExport.length} selected cleaned files...`);
        toExport.forEach(f => {
            const fileName = f.name.includes('.') ? `cleaned_${f.name}` : `cleaned_${f.name}.md`;
            downloadFile(fileName, f.content);
        });
    };

    const handleClean = async () => {
        if (selectedFiles.length === 0) return;

        setIsCleaning(true);
        try {
            const filesToProcess = kbFiles.filter(f => selectedFiles.includes(f.id));
            const batch = filesToProcess.slice(0, 10);

            st_echo('info', `AI is processing ${batch.length} files...`);

            const cleanedResults = await cleanFiles({
                files: batch.map(f => ({ name: f.name, content: f.content })),
                profileId,
                mode: cleaningMode,
                additionalInstructions,
            });

            const newQueue: PendingResult[] = [];
            cleanedResults.forEach(clean => {
                const original = batch.find(b => b.name === clean.name);
                if (original) {
                    newQueue.push({
                        id: original.id,
                        originalName: original.name,
                        originalContent: original.content,
                        cleanedContent: clean.content,
                    });
                }
            });

            if (newQueue.length > 0) {
                setReviewQueue(newQueue);
            } else {
                st_echo('error', 'AI returned no format-valid results.');
            }

            setSelectedFiles(prev => prev.filter(id => !batch.find(b => b.id === id)));

        } catch (error: any) {
            console.error('Cleaning failed:', error);
            st_echo('error', `Generation failed: ${error.message}`);
        } finally {
            setIsCleaning(false);
        }
    };

    const confirmResult = (result: PendingResult) => {
        const newFiles = kbFiles.map(f => f.id === result.id ? { ...f, content: result.cleanedContent, cleanMode: cleaningMode } : f);
        onFilesUpdate(newFiles);
        setReviewQueue(prev => prev.slice(1));
        setHistory(prev => [{ name: result.originalName, status: 'accepted' as const, mode: cleaningMode, timestamp: Date.now() }, ...prev]);
        st_echo('success', `Updated ${result.originalName}`);
    };

    const handleAcceptAll = () => {
        if (reviewQueue.length === 0) return;

        const newFileMap = new Map(kbFiles.map(f => [f.id, f]));
        const newHistoryItems: HistoryItem[] = [];

        reviewQueue.forEach(item => {
            const original = newFileMap.get(item.id);
            if (original) {
                newFileMap.set(item.id, {
                    ...original,
                    content: item.cleanedContent,
                    cleanMode: cleaningMode
                });
                newHistoryItems.push({
                    name: item.originalName,
                    status: 'accepted' as const,
                    mode: cleaningMode,
                    timestamp: Date.now()
                });
            }
        });

        onFilesUpdate(Array.from(newFileMap.values()));
        setHistory(prev => [...newHistoryItems.reverse(), ...prev]);
        setReviewQueue([]);
        st_echo('success', `Bulk applied ${reviewQueue.length} cleaning results.`);
    };

    const rejectResult = () => {
        if (reviewQueue.length > 0) {
            const result = reviewQueue[0];
            const newFiles = kbFiles.map(f => f.id === result.id ? { ...f, cleanMode: 'rejected' as const } : f);
            onFilesUpdate(newFiles);
            setHistory(prev => [{ name: result.originalName, status: 'rejected' as const, mode: 'rejected' as const, timestamp: Date.now() }, ...prev]);
        }
        setReviewQueue(prev => prev.slice(1));
    };

    const handleRetryOne = async (comment: string) => {
        if (reviewQueue.length === 0) return;
        const current = reviewQueue[0];

        try {
            const result = await cleanFiles({
                files: [{ name: current.originalName, content: current.originalContent }],
                profileId,
                mode: cleaningMode,
                additionalInstructions: `USER FEEDBACK ON PREVIOUS VERSION: "${comment}"\n\n${additionalInstructions || ''}`,
            });

            if (result && result.length > 0) {
                const updatedQueue = [...reviewQueue];
                updatedQueue[0] = {
                    ...current,
                    cleanedContent: result[0].content
                };
                setReviewQueue(updatedQueue);
                st_echo('success', `AI re-cleaned ${current.originalName} based on your feedback.`);
            }
        } catch (e: any) {
            st_echo('error', `Retry failed: ${e.message}`);
        }
    };

    const getStatusMarker = (mode?: string) => {
        switch (mode) {
            case 'strip': return { icon: 'fa-broom', color: '#4caf50', title: 'Cleaned: Strip' };
            case 'summary': return { icon: 'fa-compress', color: '#81c784', title: 'Cleaned: Summary' };
            case 'heavy_summary': return { icon: 'fa-box-archive', color: '#a5d6a7', title: 'Cleaned: Heavy Summary' };
            case 'rejected': return { icon: 'fa-circle-xmark', color: '#f44336', title: 'Cleaning Rejected' };
            default: return null;
        }
    };

    return (
        <div className="cleaner-container container" style={{ flexDirection: 'column', gap: '20px' }}>
            <div className="card" style={{ width: '100%', padding: '25px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="cleaner-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
                    <div style={{ flex: '1 1 300px' }}>
                        <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <i className="fa-solid fa-broom" style={{ color: 'var(--SmartThemeBodyColor)' }}></i>
                            Lore Cleaner
                        </h2>
                        <div className="mode-selector" style={{ display: 'flex', gap: '8px', marginTop: '15px', flexWrap: 'wrap' }}>
                            <STButton
                                onClick={() => setCleaningMode('strip')}
                                className={`small ${cleaningMode === 'strip' ? 'confirm' : 'secondary'}`}
                                title="Remove technical noise but keep ALL text intact"
                            >
                                <i className="fa-solid fa-broom"></i> Strip
                            </STButton>
                            <STButton
                                onClick={() => setCleaningMode('summary')}
                                className={`small ${cleaningMode === 'summary' ? 'confirm' : 'secondary'}`}
                                title="Remove noise and perform light summarization"
                            >
                                <i className="fa-solid fa-compress"></i> Normal
                            </STButton>
                            <STButton
                                onClick={() => setCleaningMode('heavy_summary')}
                                className={`small ${cleaningMode === 'heavy_summary' ? 'confirm' : 'secondary'}`}
                                title="Extract only critical facts, heavy compression"
                            >
                                <i className="fa-solid fa-box-archive"></i> Heavy
                            </STButton>
                        </div>
                    </div>

                    <div className="cleaner-actions" style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end', flex: '1 1 400px' }}>
                        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                            <STButton onClick={selectAllUnfiltered} className="small secondary" title="Select files that haven't been cleaned yet">New/Rejected</STButton>
                            <STButton onClick={selectAll} className="small secondary">All</STButton>
                            <STButton onClick={deselectAll} className="small secondary">None</STButton>
                            <div style={{ width: '10px' }}></div>
                            <STButton
                                onClick={handleRevertSelected}
                                className="small secondary danger_button"
                                disabled={selectedFiles.length === 0}
                                title="Undo cleaning for SELECTED files"
                            >
                                <i className="fa-solid fa-undo"></i> Revert
                            </STButton>
                            <STButton
                                onClick={handleExportSelected}
                                className="small"
                                disabled={selectedFiles.length === 0}
                                title="Download selected cleaned files"
                            >
                                <i className="fa-solid fa-download"></i> Save
                            </STButton>
                        </div>

                        <STButton
                            onClick={handleClean}
                            disabled={isCleaning || selectedFiles.length === 0}
                            className="confirm"
                            style={{ minWidth: '200px', height: '40px' }}
                        >
                            {isCleaning ? (
                                <><i className="fa-solid fa-spinner fa-spin"></i> Processing...</>
                            ) : (
                                <><i className="fa-solid fa-wand-magic-sparkles"></i> Clean Selected ({selectedFiles.length})</>
                            )}
                        </STButton>
                    </div>
                </div>

                <div className="cleaner-toolbar">
                    <input
                        type="text"
                        placeholder="Search your library..."
                        className="text_pole"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ width: '100%', padding: '12px' }}
                    />
                </div>

                <div className="file-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '15px',
                    maxHeight: '450px',
                    overflowY: 'auto',
                    padding: '5px'
                }}>
                    {filteredFiles.map(file => {
                        const marker = getStatusMarker(file.cleanMode);
                        return (
                            <div
                                key={file.id}
                                className={`file-card card ${selectedFiles.includes(file.id) ? 'active' : ''}`}
                                onClick={() => toggleFile(file.id)}
                                style={{
                                    cursor: 'pointer',
                                    border: selectedFiles.includes(file.id) ? '2px solid var(--SmartThemeBodyColor)' : '1px solid rgba(255,255,255,0.08)',
                                    transition: 'all 0.1s ease-in-out',
                                    position: 'relative',
                                    background: selectedFiles.includes(file.id) ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.2)'
                                }}
                            >
                                <div className="file-info" style={{ padding: '15px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <i className={`fa-solid ${file.name.endsWith('.json') ? 'fa-file-code' : 'fa-file-lines'}`} style={{ opacity: 0.4, fontSize: '1.2em' }}></i>
                                        <span style={{ fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexGrow: 1 }}>
                                            {file.name}
                                        </span>
                                        {marker && (
                                            <span title={marker.title} style={{ fontSize: '1.2em' }}>
                                                {file.cleanMode === 'strip' && ' 🧹'}
                                                {file.cleanMode === 'summary' && ' 🗜️'}
                                                {file.cleanMode === 'heavy_summary' && ' 📦'}
                                                {file.cleanMode === 'rejected' && ' ❌'}
                                            </span>
                                        )}
                                    </div>
                                    <div style={{ marginTop: '10px', fontSize: '0.8em', opacity: 0.5, display: 'flex', justifyContent: 'space-between' }}>
                                        <span>{Math.round(file.content.length / 1024)} KB</span>
                                        <span>{file.enabled ? 'Active' : 'Muted'}</span>
                                    </div>
                                </div>
                                {selectedFiles.includes(file.id) && (
                                    <div style={{ position: 'absolute', top: '10px', right: '12px', color: 'var(--SmartThemeBodyColor)' }}>
                                        <i className="fa-solid fa-check-circle"></i>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    {filteredFiles.length === 0 && (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px', opacity: 0.3 }}>
                            <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '3em', marginBottom: '15px', display: 'block' }}></i>
                            No files match your search.
                        </div>
                    )}
                </div>

                {/* INTEGRATED HISTORY FEED */}
                <div className="history-section" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                        <h4 style={{ margin: 0, opacity: 0.7 }}>
                            <i className="fa-solid fa-clock-rotate-left"></i> Recent Activity
                        </h4>
                        {history.length > 0 && (
                            <STButton onClick={() => setHistory([])} className="small secondary">Clear</STButton>
                        )}
                    </div>

                    <div className="history-list" style={{
                        maxHeight: '200px',
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px'
                    }}>
                        {history.length > 0 ? (
                            history.map((item, i) => {
                                const marker = getStatusMarker(item.mode);
                                return (
                                    <div key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '8px 15px',
                                        background: 'rgba(255,255,255,0.02)',
                                        borderRadius: '6px',
                                        fontSize: '0.9em',
                                        borderLeft: `3px solid ${marker?.color || 'transparent'}`
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className={`fa-solid ${marker?.icon || (item.status === 'accepted' ? 'fa-circle-check' : 'fa-circle-xmark')}`}
                                                style={{ color: marker?.color || (item.status === 'accepted' ? '#4caf50' : '#f44336') }}></i>
                                            <span style={{ opacity: 0.9 }}>{item.name}</span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                            <span style={{
                                                fontSize: '0.75em',
                                                fontWeight: 600,
                                                color: marker?.color || (item.status === 'accepted' ? '#81c784' : '#e57373'),
                                                letterSpacing: '0.05em'
                                            }}>
                                                {item.status.toUpperCase()} {item.mode && item.mode !== 'rejected' ? `(${item.mode.replace('_', ' ')})` : ''}
                                            </span>
                                            <span style={{ fontSize: '0.8em', opacity: 0.3 }}>{new Date(item.timestamp).toLocaleTimeString()}</span>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div style={{ textAlign: 'center', padding: '20px', opacity: 0.2, fontSize: '0.9em', fontStyle: 'italic' }}>
                                No recent activity. Files you clean will appear here.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {reviewQueue.length > 0 && (
                <CleanerDiffPopup
                    fileName={reviewQueue[0].originalName}
                    originalContent={reviewQueue[0].originalContent}
                    newContent={reviewQueue[0].cleanedContent}
                    onConfirm={() => confirmResult(reviewQueue[0])}
                    onCancel={rejectResult}
                    onAcceptAll={handleAcceptAll}
                    onRetry={handleRetryOne}
                    queueCount={reviewQueue.length}
                />
            )}
        </div>
    );
};
