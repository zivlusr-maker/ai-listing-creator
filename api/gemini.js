// api/gemini.js - Vercel Serverless Function
// Proxies requests to Google Gemini API keeping key server-side

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-API-Key');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    // API key: from client header OR server env
    const apiKey = req.headers['x-api-key'] || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(400).json({ error: 'No API key provided. Add your Gemini API key in Settings.' });
    }

    const { model = 'gemini-2.5-flash-preview-04-17', contents, generationConfig } = req.body;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents, generationConfig }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'Gemini API error' });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error('API error:', err);
    return res.status(500).json({ error: err.message });
  }
}
