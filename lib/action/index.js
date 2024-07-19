"use server";

// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// console.log(process.env.OPENAI_API_KEY);
export async function createAudio(text) {
  if (!text) throw new Error("No text");

  const response = await fetch(
    "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "xi-api-key": process.env.XI_API_KEY,
      },
      body: JSON.stringify({
        text,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 1,
        },
      }),
    }
  );
  // if (!response.ok) throw new Error("Error creating an audio");
  const audio = await response.json();
  console.log(audio);

  // const mp3 = await openai.audio.speech.create({
  //   model: "tts-1",
  //   voice: "alloy",
  //   input: text,
  // });
  // console.log(mp3);
  // const buffer = Buffer.from(await mp3.arrayBuffer());
  // console.log(buffer);
  // if (!mp3) throw new Error("No audio generated!");
}
