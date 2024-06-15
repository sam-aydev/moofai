"use client";

import { BiChevronRight } from "react-icons/bi";

export default function TextToSpeech() {
  return (
    <div>
      <div>
        <div className="flex justify-end font-semibold cursor-pointer">
          <p className="flex bg-slate-300 p-2 rounded hover:bg-white hover:border-black border-2 border-slate-400">
            All My Converted Speech{" "}
            <span>
              <BiChevronRight className="size-6" />{" "}
            </span>
          </p>
        </div>
        <div className="mt-6">
          <form action="">
            <div>
              <textarea
                name="tts"
                id="tts"
                rows={10}
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
