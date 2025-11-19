import { GoogleGenAI, ChatSession, GenerativeModel } from "@google/genai";
import { AI_SYSTEM_PROMPT } from "../constants";

let chatSession: ChatSession | null = null;
let genAI: GoogleGenAI | null = null;

const getClient = () => {
  if (!genAI) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing in environment variables.");
      return null;
    }
    genAI = new GoogleGenAI({ apiKey });
  }
  return genAI;
};

export const initializeChat = async (): Promise<ChatSession | null> => {
  const ai = getClient();
  if (!ai) return null;

  try {
    chatSession = ai.chats.create({
        model: "gemini-2.5-flash",
        config: {
            systemInstruction: AI_SYSTEM_PROMPT,
            temperature: 0.7,
        }
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat session:", error);
    return null;
  }
};

export const sendMessageStream = async function* (message: string) {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    throw new Error("Chat session could not be initialized.");
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of result) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};
