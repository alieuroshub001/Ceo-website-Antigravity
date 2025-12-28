import { useState } from 'react';
import { Ollama } from 'ollama';
import { siteContext } from '../data/siteContext';

export const useOllama = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendMessage = async (messages) => {
        setLoading(true);
        setError(null);

        const apiKey = import.meta.env.VITE_OLLAMA_API_KEY;

        // Prepare conversation history with system prompt
        const conversation = [
            { role: 'system', content: siteContext },
            ...messages
        ];

        try {
            // Using the proxy path we set up in vite.config.js to avoid CORS
            // The library allows setting the host. 
            // We point it to our local server's proxy route.
            const ollama = new Ollama({
                host: window.location.origin + '/ollama-api',
                headers: {
                    Authorization: "Bearer " + apiKey,
                },
            });

            // Prepare conversation with system context
            const conversation = [
                { role: 'system', content: siteContext },
                ...messages
            ];

            const response = await ollama.chat({
                model: "gpt-oss:120b-cloud", // Using the cloud model name
                messages: conversation,
                stream: false, // Keep false for now to simplify UI
            });

            return response.message.content;

        } catch (err) {
            console.error("Chat Error:", err);
            return `System Error: ${err.message}. Please check console.`;
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading, error };
};
