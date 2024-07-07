import { Groq } from "groq-sdk";
import { request } from "http";

const GroqAPI = process.env.NEXT_PUBLIC_GROQ;

const groq = new Groq({
  apiKey: GroqAPI,
  dangerouslyAllowBrowser: true,
});

const requestToGroqAI = async (content: string) => {
  const reply = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content,
      },
    ],
    model: "llama3-8b-8192",
  });
  return reply;
};

export { requestToGroqAI };
