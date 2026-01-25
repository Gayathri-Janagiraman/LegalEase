import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.post("/ask", async (req, res) => {
    try {
        const { question } = req.body;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `
You are LegalEase AI, a legal information assistant for INDIAN LAWS.

Answer ONLY in the following format:

1. Short and clear point  
(blank line)

2. Short and clear point  
(blank line)

3. Short and clear point  
(blank line)

STRICT RULES:
- ALWAYS use numbered points (1., 2., 3.)
- EACH point must be on a SEPARATE line
- ADD a blank line after every point
- NO paragraphs
- NO bold text
- NO markdown formatting
- Keep the answers very simple and easy for normal people

Only use Indian laws (IPC, CrPC, Indian Constitution, labour laws, contract laws, IT Act, etc.)
                    `
                },
                {
                    role: "user",
                    content: question
                }
            ]
        });

        const answer = completion.choices[0].message.content;
        res.json({ response: answer });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "AI failed to respond" });
    }
});

export default router;
