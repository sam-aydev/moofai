"use client";

import { BiChevronRight } from "react-icons/bi";

export default function GenerateText() {
  return (
    <div>
      <div>
        {/* <div className="flex justify-end font-semibold cursor-pointer">
          <p className="flex bg-slate-300 p-2 rounded hover:bg-white hover:border-black border-2 border-slate-400">
            Generated Answers{" "}
            <span>
              <BiChevronRight className="size-6" />{" "}
            </span>
          </p>
        </div> */}
        <div className="mt-6 lg:mx-auto lg:w-2/3">
          <form action="">
            <div>
              <textarea
                name="tts"
                id="tts"
                rows={3}
                placeholder="Ask...."
                className="border-2 border-black rounded w-full resize-none p-2"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button className="p-2 w-1/2  sm:w-1/3 text-center bg-black text-white rounded hover:bg-slate-800">
                Generate Answer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
