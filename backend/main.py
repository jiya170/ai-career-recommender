from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

class UserData(BaseModel):
    answers: dict

@app.post("/analyze")
def analyze(data: UserData):

    try:
        prompt = f"""
You are an expert AI Career Counselor.

Analyze the following student profile deeply and provide a HIGHLY DETAILED career report.

Rules:
- Be specific, not generic
- Give realistic career path
- Add reasoning for every decision
- Keep structured format
- No one-line answers

Student Data:
{data.answers}

Return format:

1. Career Recommendation (with explanation)
2. Why this career fits (detailed reasoning)
3. Match Score (0-10 with justification)
4. Required Skills
5. Skill Gaps (very detailed)
6. Step-by-step Roadmap (3 phases: Beginner, Intermediate, Advanced)
7. Internship Suggestions (real-world roles)
"""

        response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[
        {"role": "system", "content": "You are a senior career advisor with 20 years experience."},
        {"role": "user", "content": prompt}
    ]
)

        return {
            "result": response.choices[0].message.content
        }

    except Exception as e:
        print("ERROR:", e)
        return {
            "result": f"Backend Error: {str(e)}"
        }