export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // DEBUG: Log available keys to help diagnose "Missing Key"
        console.log("Environment Keys Available:", Object.keys(process.env).filter(k => k.includes('API')));

        const apiKey = process.env.VITE_OLLAMA_API_KEY || process.env.OLLAMA_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ error: 'Server Config Error: Missing API Key' });
        }

        const { messages, model, stream } = req.body;

        const response = await fetch('https://ollama.com/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: model || "gpt-oss:120b-cloud",
                messages: messages,
                stream: stream || false,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            return res.status(response.status).json({ error: `Upstream Error: ${response.status} - ${errorText}` });
        }

        const data = await response.json();
        return res.status(200).json(data);

    } catch (error) {
        console.error('Proxy Error:', error);
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}
