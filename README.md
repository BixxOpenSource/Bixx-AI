# Bixx AI Chatbot

🚀 **Bixx AI** is a modern, clean chatbot frontend + backend starter. Built by Omer AI.

---

## Features

* Responsive, minimal frontend UI
* Simple Express backend serving frontend & chat API
* Placeholder spot to plug in YOUR AI logic (OpenAI, Groq, Deepseek, or any AI API)
* Fully customizable, no fluff, no mid

---

## Setup & Run

1.  **Download** or clone the repository:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/Bixx-AI-Chatbot.git](https://github.com/YOUR_USERNAME/Bixx-AI-Chatbot.git) # Replace with your repo URL
    ```
2.  Navigate into the project directory:
    ```bash
    cd Bixx-AI-Chatbot
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Run the server:
    ```bash
    node server.js
    ```
5.  Open `http://localhost:3000` in your browser

---

## How to add AI logic

The `backend server.js` includes a simple API endpoint at `/api/chat`:

```javascript
app.post('/api/chat', async (req, res) => {
  // Extract user message here

  // Prepare messages array

  // *** THIS IS WHERE YOU INSERT YOUR AI CALL ***
  // For example, call OpenAI API or your favorite AI backend,
  // then return the AI's response in JSON:
  // res.json({ reply: aiReply });
});
