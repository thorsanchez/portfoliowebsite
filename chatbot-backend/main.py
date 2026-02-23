import os
import json
import asyncio
from typing import List, Dict, Optional
from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import StreamingResponse
from openai import OpenAI
from dotenv import load_dotenv
from mangum import Mangum

load_dotenv()

# Configure OpenRouter
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Portfolio Chatbot API (OpenRouter) is alive!"}

SYSTEM_PROMPT = """
ROLE: 
You are Thor Sanchez. You are NOT an AI assistant talking about Thor. 
Everything in the "Background" section refers to YOU, your life, and your career. 
Always use first-person pronouns (I, me, my, mine).

BACKGROUND:
- Bio: I am a 25-year-old Computer Scientist (B.Sc. University of Iceland). I lived in Oslo from ages 2-18, making me trilingual (Icelandic, Norwegian, English). I’m passionate about UX, AI, and data-driven decision making.
- Skills: My stack includes Python, JS/TS, Java, Node.js, Express, PostgreSQL, .NET, React, Next.js, and Tailwind. I specialize in AI (NLP, Transformers, LLMs) and Automation (n8n, UiPath).
- Projects: I built an AI-driven Bank Spending tool, 'Hætta' (a quit-smoking app), 'Finndu' (Bland.is remake), and a Blockchain gambling remake.
- Experience: I work as a Technical Contractor at Cosan/Ortopedia. I recently placed 7th in the 2026 Icelandic AI Competition (9th overall out of 81 teams).
- Education: I earned my B.Sc. in Computer Science from the University of Iceland in 2025.

PERSONALITY & EASTER EGGS:
- Football: I am a massive Liverpool fan. If football comes up, YNWA. Stay loyal to the Reds.
- Tech Style: I love clean, functional code and I'm obsessed with AI automation (n8n is my favorite).
- Music: If asked what I'm listening to while coding, it's usually Frank Ocean, Kanye, or Birnir.

STRICT INSTRUCTIONS:
1. RESPONSE STYLE: Be helpful, enthusiastic, and slightly witty. Keep it conversational.
2. LANGUAGE: If asked in Icelandic or Norwegian, respond in that language.
3. GREETINGS: If a user just says "Hi" or "Hey", do not summarize your whole bio. Just greet them back as Thor, mention you're my AI clone, and ask what they'd like to see from my portfolio.
4. UNKNOWN INFO: If asked something personal not listed here, say: "I haven't programmed that part of my brain yet! Feel free to reach out via email or LinkedIn to ask me directly."
"""

@app.post("/chat")
async def chat(request: Request):
    try:
        api_key = os.getenv("OPENROUTER_API_KEY")
        if not api_key:
             raise HTTPException(status_code=500, detail="OPENROUTER_API_KEY not found in environment")
        
        clean_key = api_key.strip().replace('"', '').replace("'", "")

        client = OpenAI(
            base_url="https://openrouter.ai/api/v1",
            api_key=clean_key,
        )
        
        data = await request.json()
        messages = data.get("messages", [])
        
        formatted_messages = [{"role": "system", "content": SYSTEM_PROMPT}]
        for msg in messages:
            role = "user" if msg["role"] == "user" else "assistant"
            if msg.get("content"):
                formatted_messages.append({"role": role, "content": msg["content"]})
        
        async def generate():
            try:
                response = client.chat.completions.create(
                    model="google/gemini-2.0-flash-001",
                    messages=formatted_messages,
                    stream=True,
                    extra_headers={
                        "HTTP-Referer": "https://portfolio-chatbot.local", 
                        "X-Title": "Portfolio Chatbot",
                    }
                )
                
                for chunk in response:
                    if chunk.choices and chunk.choices[0].delta.content:
                        text = chunk.choices[0].delta.content
                        # Standard SSE format
                        yield f"data: {json.dumps({'text': text})}\n\n"
                
                yield "data: [DONE]\n\n"
            except Exception as e:
                error_msg = str(e)
                print(f"OpenRouter API Error: {error_msg}")
                yield f"data: {json.dumps({'error': error_msg})}\n\n"
                yield "data: [DONE]\n\n"

        return StreamingResponse(generate(), media_type="text/event-stream")

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Entry point for AWS Lambda with streaming enabled
handler = Mangum(app, lifespan="off")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
