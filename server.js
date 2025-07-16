const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'frontend')));

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'No message provided' });
  }

  try {
    // Minimal AI messages array, just user message
    const messages = [
      { role: 'user', content: message }
    ];

    // Default placeholder AI reply
    const aiReply = 
    "🚧 AI logic not implemented yet.\n 👉 Replace this with your AI call — OpenAI, Groq, Deepseek, or your favorite AI API."

    res.json({ reply: aiReply });
  } catch (err) {
    console.error('AI chat error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server live at http://localhost:${PORT}`);
});
