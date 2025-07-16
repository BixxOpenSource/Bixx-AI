# 🚀 Bixx AI Chatbot &nbsp; <img src="https://img.shields.io/badge/AI%20Powered-OpenAI-blueviolet?style=flat-square&logo=openai" align="right" height="28"/>

---

<p align="center">
  <img src="https://img.shields.io/badge/Live%20Demo-Bixx%20AI-2563eb?style=for-the-badge&logo=vercel" alt="Live Demo"/>
  <a href="https://bixx.vercel.app/"><img src="https://img.shields.io/badge/Visit%20Bixx%20AI%20Live-blue?style=for-the-badge&logo=vercel" alt="Visit Bixx AI Live"></a>
  <img src="https://img.shields.io/github/stars/BixxOpenSource/Bixx?style=for-the-badge" alt="Stars"/>
  <img src="https://img.shields.io/github/license/BixxOpenSource/Bixx?style=for-the-badge" alt="License"/>
</p>

---

> **Bixx AI** is a modern, clean, and fully customizable chatbot starter kit. <br>Plug in your favorite AI API (OpenAI, Groq, Deepseek, etc.) and launch your own chatbot in minutes!

---

## ✨ Features

- 🎨 **Minimal, responsive frontend UI**
- ⚡ **Express backend** serving frontend & chat API
- 🧠 **Easy AI logic plug-in** (OpenAI, Groq, Deepseek, etc.)
- 🛠️ **Fully customizable** (branding, colors, logic)
- 🚀 **Production-ready** (Vercel, Heroku, etc.)
- 💬 **Markdown, code, and image support**
- 🌙 **Dark & light mode**

---

## 🖥️ Tech Stack

- **Frontend:** HTML, TailwindCSS, Vanilla JS
- **Backend:** Node.js, Express
- **Deployment:** Vercel, Heroku, or any Node host

---

## 📸 Screenshots

<p align="center">
  <img src="https://iili.io/FV87mZJ.jpg" alt="Bixx AI Screenshot" width="350"/>
  <img src="https://iili.io/FV805UQ.jpg" alt="Bixx AI Screenshot 2" width="350"/>
</p>

---

## 🚀 Quick Start

1. **Clone the repo:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/Bixx-AI-Chatbot.git
    cd Bixx-AI-Chatbot
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Run the server:**
    ```bash
    node server.js
    ```
4. **Open in browser:**
    [http://localhost:3000](http://localhost:3000)

---

## 🧩 How to Add Your AI Logic

The backend (`server.js`) includes a simple API endpoint at `/api/chat`:

```js
app.post('/api/chat', async (req, res) => {
  // Extract user message here
  // Prepare messages array
  // *** INSERT YOUR AI CALL HERE ***
  // For example, call OpenAI API or your favorite AI backend,
  // then return the AI's response in JSON:
  // res.json({ reply: aiReply });
});
```

- Replace the placeholder with your AI API call (OpenAI, Groq, Deepseek, etc.)
- Return the AI's response as `{ reply: aiReply }`

---

## 🎨 Customization

- Edit `frontend/index.html` for UI/branding
- Change colors, fonts, and images easily
- Add new endpoints or logic in `server.js`

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!<br>
Feel free to [open an issue](https://github.com/YOUR_USERNAME/Bixx-AI-Chatbot/issues) or submit a pull request.

---

## 📄 License

This project is [MIT](LICENSE) licensed.

---

<p align="center">
  <a href="https://bixx.vercel.app/" target="_blank"><img src="https://img.shields.io/badge/Try%20Bixx%20AI%20Now-2563eb?style=for-the-badge&logo=vercel" alt="Try Bixx AI Now"></a>
</p>
