"use server";

import { createText } from "@/supabase/server/action";
import { GoogleGenerativeAI } from "@google/generative-ai";
const { API_KEY }: any = process.env;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateText(question: string) {
  const prompt = question;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const generatedAnswer = response.text();
  await createText({ question, generatedAnswer });
  console.log(generatedAnswer);
}
