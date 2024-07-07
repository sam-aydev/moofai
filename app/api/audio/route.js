import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { text } = await req.json();
  console.log(text)
  if (!text)
    return new NextResponse(JSON.stringify({ error: "No text found" }));
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: text,
  });
  const buffer = Buffer.from(await mp3.arrayBuffer());
  if (buffer || mp3) {
    console.log(mp3, buffer);
    return new NextResponse(JSON.stringify({ buffer, mp3 }));
  }
  return new NextResponse(JSON.stringify({ error: "No buffer or mp3" }));
}
