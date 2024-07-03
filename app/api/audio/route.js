import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(request) {
  const { text } = await request.json();
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
    return new NextResponse(JSON.stringify({ buffer }));
  }
  return new NextResponse(JSON.stringify({ error: "No buffer or mp3" }));
}
