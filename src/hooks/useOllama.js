import { useState } from 'react';
// import { Ollama } from 'ollama'; // REMOVED: Incompatible with browser build
import { siteContext } from '../data/siteContext';

export const useOllama = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendMessage = async (messages) => {
        setLoading(true);
        setError(null);

        const apiKey = import.meta.env.VITE_OLLAMA_API_KEY;

        // Prepare conversation with system context
        const conversation = [
            { role: 'system', content: siteContext },
            ...messages
        ];

        try {
            // Using Vercel Serverless Function to proxy (bypasses CORS)
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "gpt-oss:120b-cloud",
                    messages: conversation,
                    stream: false,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            return data.message.content;

        } catch (err) {
            console.error("Chat Error:", err);
            return `System Error: ${err.message}. Please check console.`;
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading, error };
};
