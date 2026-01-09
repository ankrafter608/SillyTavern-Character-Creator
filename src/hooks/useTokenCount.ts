import { useState, useEffect, useRef } from 'react';
import { settingsManager } from '../settings.js';

const TOKENIZER_MAP: Record<number, string> = {
    13: '/api/tokenizers/gemma/encode',
    12: '/api/tokenizers/llama3/encode',
    3: '/api/tokenizers/llama/encode',
    7: '/api/tokenizers/mistral/encode',
    2: '/api/tokenizers/openai/encode',
    11: '/api/tokenizers/claude/encode',
};

export function useTokenCount(text: string) {
    const [tokens, setTokens] = useState<number | null>(null);
    const [isCalculating, setIsCalculating] = useState(false);
    const timeoutRef = useRef<number | null>(null);
    const lastRequestText = useRef<string>('');

    useEffect(() => {
        if (!text) {
            setTokens(0);
            return;
        }

        // Debounce
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(async () => {
            if (text === lastRequestText.current) return;

            setIsCalculating(true);
            const tokenizerId = settingsManager.getSettings().preferredTokenizer || 13;
            const url = TOKENIZER_MAP[tokenizerId] || TOKENIZER_MAP[13];

            try {
                lastRequestText.current = text;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text }),
                });

                if (!response.ok) throw new Error('API error');

                const data = await response.json();

                let count = 0;
                if (data && data.ids && Array.isArray(data.ids)) {
                    count = data.ids.length;
                } else if (Array.isArray(data)) {
                    count = data.length;
                } else if (typeof data.token_count === 'number') {
                    count = data.token_count;
                } else {
                    count = Math.ceil(text.length / 3.35);
                }

                setTokens(count);
            } catch (err) {
                console.warn('Token calculation failed, using guesstimate', err);
                setTokens(Math.ceil(text.length / 3.35));
            } finally {
                setIsCalculating(false);
            }
        }, 1000); // 1 second debounce

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [text]);

    return { tokens, isCalculating };
}
