"use server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
console.log(process.env.OPENAI_KEY);
export async function createAudio(text) {
  if (!text) throw new Error("No text");

  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: text,
  });
  console.log(mp3);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  console.log(buffer);
  if (!mp3) throw new Error("No audio generated!");
}
