"use client";

import { BiChevronRight } from "react-icons/bi";

export default function TextToImage() {
  return (
    <div>
      <div>
        {/* <div className="flex justify-end font-semibold cursor-pointer">
          <p className="flex bg-slate-300 p-2 rounded hover:bg-white hover:border-black border-2 border-slate-400">
            My Generated Images{" "}
            <span>
              <BiChevronRight className="size-6" />{" "}
            </span>
          </p>
        </div> */}
        <div className="mt-6">
          <form action="">
            <div>
              <textarea
                name="tts"
                id="tts"
                rows={3}
                placeholder="Put in your text...."
                className="border-2 border-black rounded w-full resize-none p-2"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button className="p-2 w-1/2 sm:w-1/3 text-center bg-black text-white rounded hover:bg-slate-800">
                Convert My Text To Image
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
