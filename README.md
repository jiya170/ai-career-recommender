# 🤖 AI Career Advisor (Next-Gen SaaS Project)

An AI-powered intelligent career guidance platform that analyzes user preferences and generates personalized career recommendations, skill gap analysis, and structured learning roadmaps.

Built using **React + FastAPI + Groq LLM**, this project simulates a real-world AI SaaS product.

---

## 🚀 Live Preview

> (Add your deployment link here)

http://localhost:3000


---

## ✨ Features

### 🧠 AI Career Intelligence
- Smart career prediction based on user profile
- Industry-aligned recommendations
- Alternative career suggestions

### 📊 Skill Analysis
- Match score generation (0–10)
- Skill gap detection
- Strength evaluation

### 🗺️ Learning Roadmap
- Step-by-step learning plan
- Beginner → Advanced progression
- Real-world resources suggestions

### 💻 Modern UI/UX
- SaaS-style dashboard design
- Clean gradient theme
- Responsive layout
- Scroll-safe result page

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Fetch API / Axios
- Chart.js (Radar Visualization)
- React Markdown

### Backend
- FastAPI
- Python
- Pydantic
- Groq API (LLM Integration)

---

## 📁 Project Structure


frontend/
├── src/
│ ├── pages/
│ │ ├── QuestionnairePage.jsx
│ │ └── ResultPage.jsx
│ ├── data/
│ │ └── questions.js
│ └── App.js

backend/
├── main.py
├── models.py
└── requirements.txt


---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/ai-career-advisor.git
cd ai-career-advisor
2️⃣ Backend Setup (FastAPI)
cd backend
pip install fastapi uvicorn groq

Run server:

uvicorn main:app --reload

Backend runs at:

http://127.0.0.1:8000
3️⃣ Frontend Setup (React)
cd frontend
npm install
npm start

Frontend runs at:

http://localhost:3000
🔌 API Endpoint
POST /analyze
Request:
{
  "answers": {
    "interest": "Data Science",
    "skill": "Intermediate",
    "goal": "Job"
  }
}
Response:
{
  "result": "AI-generated career roadmap with analysis"
}
🧠 How It Works
User fills questionnaire form
Frontend sends answers to FastAPI backend
Groq LLM processes user profile
AI generates:
Career recommendation
Match score
Skill gaps
Learning roadmap
Result is displayed in a modern dashboard UI
📊 Output Example
🎯 Career Role: Cybersecurity Analyst / Data Scientist
📈 Match Score: 8.7/10
🧠 Skills: Python, Statistics, Problem Solving
🗺️ Roadmap: Structured 6–12 month plan
🚀 Future Enhancements
🔐 User Authentication System
📄 PDF Download Report
💬 Chat-based AI Career Assistant
☁️ Cloud Deployment (Vercel + Render)
📊 Real-time Analytics Dashboard
👨‍💻 Author

Jiya Arora

GitHub: https://github.com/your-username
Project: AI Career Advisor
⭐ Support

If you like this project:

⭐ Star this repo
🍴 Fork it
🚀 Share with friends
