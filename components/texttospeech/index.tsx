"use client";

import { useCreateAudio } from "@/lib/hooks/generateText/useCreateAudio";
import { useState } from "react";

export default function TextToSpeech() {
  const [text, setText] = useState<string>("");
  const { data, getAudio, status, error } = useCreateAudio();

  function handleSubmit(e: any) {
    e.preventDefault();

    console.log(text);
    getAudio(text);
  }
  if (status === "success") console.log(data);
  return (
    <div>
      <div>
        <div className="mt-6">
          <form action="" onSubmit={handleSubmit}>
            <div>
              <textarea
                name="tts"
                id="tts"
                rows={10}
                value={text}
                onChange={(e: any) => setText(e.target.value)}
                placeholder="Put in your text...."
                className="border-2 border-black rounded w-full resize-none p-2"
              ></textarea>
            </div>
            <div>
              <button className="p-2 w-full text-center bg-black text-white rounded hover:bg-slate-800">
                Convert My Text To Speech
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
