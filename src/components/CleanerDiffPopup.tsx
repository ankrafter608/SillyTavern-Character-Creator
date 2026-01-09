import { FC, useMemo, useState } from 'react';
import { STButton, STTextarea } from 'sillytavern-utils-lib/components/react';
import { diffLines } from 'diff';

interface CleanerDiffPopupProps {
    fileName: string;
    originalContent: string;
    newContent: string;
    onConfirm: () => void;
    onCancel: () => void;
    onAcceptAll: () => void;
    onRetry?: (comment: string) => void;
    queueCount: number;
}

export const CleanerDiffPopup: FC<CleanerDiffPopupProps> = ({
    fileName,
    originalContent,
    newContent,
    onConfirm,
    onCancel,
    onAcceptAll,
    onRetry,
    queueCount,
}) => {
    const [comment, setComment] = useState('');
    const [isRetrying, setIsRetrying] = useState(false);

    const lines = useMemo(() => {
        const changes = diffLines(originalContent, newContent);
        const leftLines: { value: string; type: 'normal' | 'removed' }[] = [];
        const rightLines: { value: string; type: 'normal' | 'added' }[] = [];

        changes.forEach(change => {
            const split = change.value.split('\n');
            if (split[split.length - 1] === '') split.pop();

            split.forEach(line => {
                if (change.added) {
                    rightLines.push({ value: line, type: 'added' });
                } else if (change.removed) {
                    leftLines.push({ value: line, type: 'removed' });
                } else {
                    leftLines.push({ value: line, type: 'normal' });
                    rightLines.push({ value: line, type: 'normal' });
                }
            });
        });

        return { leftLines, rightLines };
    }, [originalContent, newContent]);

    const handleRetry = () => {
        if (!comment.trim() || !onRetry) return;
        setIsRetrying(true);
        onRetry(comment);
    };

    return (
        <div className="diff-popup-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.92)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            padding: '20px'
        }}>
            <div className="diff-popup card" style={{
                width: '100%',
                maxWidth: '1400px',
                height: '95vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: '0 0 50px rgba(0,0,0,1)',
                border: '1px solid rgba(255,255,255,0.1)',
                background: '#111'
            }}>
                <div className="diff-header" style={{
                    padding: '15px 25px',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'rgba(255,255,255,0.03)'
                }}>
                    <div>
                        <h3 style={{ margin: 0, fontSize: '1.2em' }}>Reviewing: <span style={{ opacity: 0.6 }}>{fileName}</span></h3>
                        <p style={{ margin: '3px 0 0 0', fontSize: '0.8em', opacity: 0.4 }}>
                            Red: Original | Green: AI Cleaned | Queue: {queueCount} files
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {queueCount > 1 && (
                            <STButton onClick={onAcceptAll} className="small primary" style={{ background: '#3f51b5' }}>
                                <i className="fa-solid fa-check-double"></i> Accept All ({queueCount})
                            </STButton>
                        )}
                        <STButton onClick={onCancel} className="secondary small">Reject</STButton>
                        <STButton onClick={onConfirm} className="confirm small">Accept</STButton>
                    </div>
                </div>

                <div className="diff-viewer" style={{
                    flexGrow: 1,
                    display: 'flex',
                    overflow: 'hidden',
                    backgroundColor: '#111'
                }}>
                    {/* LEFT PANEL */}
                    <div className="diff-panel left" style={{
                        flex: 1,
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        borderRight: '1px solid rgba(255,255,255,0.05)',
                        background: 'rgba(244, 67, 54, 0.03)'
                    }}>
                        <div style={{ paddingBottom: '20px' }}>
                            {lines.leftLines.map((line, i) => (
                                <div key={i} style={{
                                    backgroundColor: line.type === 'removed' ? 'rgba(244, 67, 54, 0.2)' : 'transparent',
                                    color: line.type === 'removed' ? '#ff8a80' : 'rgba(255,255,255,0.3)',
                                    padding: '1px 15px',
                                    fontFamily: 'var(--font-family-mono, monospace)',
                                    fontSize: '12px',
                                    minHeight: '1.4em',
                                    wordBreak: 'break-all',
                                    whiteSpace: 'pre-wrap',
                                    borderLeft: `2px solid ${line.type === 'removed' ? '#f44336' : 'transparent'}`
                                }}>
                                    {line.type === 'removed' && <span style={{ marginRight: '8px', opacity: 0.5 }}>-</span>}
                                    {line.value || ' '}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="diff-panel right" style={{
                        flex: 1,
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        background: 'rgba(76, 175, 80, 0.03)'
                    }}>
                        <div style={{ paddingBottom: '20px' }}>
                            {lines.rightLines.map((line, i) => (
                                <div key={i} style={{
                                    backgroundColor: line.type === 'added' ? 'rgba(76, 175, 80, 0.2)' : 'transparent',
                                    color: line.type === 'added' ? '#b9f6ca' : 'rgba(255,255,255,0.8)',
                                    padding: '1px 15px',
                                    fontFamily: 'var(--font-family-mono, monospace)',
                                    fontSize: '12px',
                                    minHeight: '1.4em',
                                    wordBreak: 'break-all',
                                    whiteSpace: 'pre-wrap',
                                    borderLeft: `2px solid ${line.type === 'added' ? '#4caf50' : 'transparent'}`
                                }}>
                                    {line.type === 'added' && <span style={{ marginRight: '8px', opacity: 0.5 }}>+</span>}
                                    {line.value || ' '}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="diff-retry-panel" style={{
                    padding: '15px 25px',
                    background: 'rgba(0,0,0,0.3)',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}>
                    <div style={{ fontSize: '0.85em', opacity: 0.6, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i className="fa-solid fa-comment-dots"></i>
                        Feedback for AI (if cleaning is bad):
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <STTextarea
                            value={comment}
                            onChange={(e: any) => setComment(e.target.value)}
                            placeholder='e.g. "Too aggressive, kept original content", "Make it more concise"...'
                            style={{ flexGrow: 1, minHeight: '60px' }}
                        />
                        <STButton
                            disabled={!comment.trim() || isRetrying}
                            onClick={handleRetry}
                            className="secondary"
                            style={{ alignSelf: 'flex-end', height: '60px' }}
                        >
                            {isRetrying ? <i className="fa-solid fa-spinner fa-spin"></i> : <><i className="fa-solid fa-arrows-rotate"></i> Retry</>}
                        </STButton>
                    </div>
                </div>

                <div className="diff-footer" style={{
                    padding: '15px 25px',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '15px',
                    background: 'rgba(255,255,255,0.02)'
                }}>
                    {queueCount > 1 && (
                        <STButton onClick={onAcceptAll} className="confirm" style={{ marginRight: 'auto', background: '#3f51b5' }}>
                            <i className="fa-solid fa-check-double"></i> Accept All Remaining ({queueCount})
                        </STButton>
                    )}
                    <STButton onClick={onCancel} className="secondary">Keep Original</STButton>
                    <STButton onClick={onConfirm} className="confirm">Apply Cleaning</STButton>
                </div>
            </div>
        </div>
    );
};
