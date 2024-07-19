"use client";

import { useCreateAudio } from "@/lib/hooks/generateText/useCreateAudio";
import { useState } from "react";
import { GoCopy } from "react-icons/go";
import { HiInformationCircle, HiXCircle } from "react-icons/hi2";

export default function TranslateText() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [text, setText] = useState<string>("");
  // const { data, getAudio, status, error } = useCreateAudio();

  // function handleSubmit(e: any) {
  //   e.preventDefault();

  //   console.log(text);
  //   getAudio(text);
  // }
  // if (status === "success") console.log(data);
  return (
    <div>
      <div className="lg:w-4/5 md:mx-auto">
        <div className="bg-slate-50 rounded-full p-2">
          <h2 className="text-xl font-serif font-semibold text-center">
            Translate
          </h2>
        </div>
        <div className="mt-6">
          <form>
            <div className="flex flex-col space-y-3 px-3 py-2 bg-slate-50 rounded-xl">
              <div className="flex justify-center items-center font-semibold space-x-10">
                <h2 className="w-[50%]">Language To Be Translated</h2>
                <h2 className="w-[50%]">Expected Language</h2>
              </div>

              <div className="flex justify-between space-x-2 ">
                <div className="border-2 rounded-full p-2 w-[50%] cursor-pointer">
                  <select
                    name=""
                    id=""
                    className=" bg-slate-50 w-full outline-none"
                  >
                    <option value="">English</option>
                    <option value="">French</option>
                    <option value="">Spanish</option>
                    <option value="">Hungary</option>
                    <option value="">India</option>
                    <option value="">Swahili</option>
                    <option value="">Mandarin</option>
                  </select>
                </div>
                <div className="border-2 rounded-full p-2 w-[50%] cursor-pointer ">
                  <select
                    name=""
                    id=""
                    className=" bg-slate-50 w-full outline-none"
                  >
                    <option value="">Hindi</option>
                    <option value="">France</option>
                    <option value="">Spanish</option>
                    <option value="">Hungary</option>
                    <option value="">English</option>
                    <option value="">Swahili</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  name="tts"
                  id="tts"
                  rows={6}
                  // value={text}
                  // onChange={(e: any) => setText(e.target.value)}
                  placeholder="Put in your text...."
                  className="border-2 border-black rounded w-full resize-none p-2"
                ></textarea>
              </div>
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 w-full text-center bg-black text-white rounded hover:bg-slate-800"
              >
                Translate Text
              </button>
              <p className="flex  items-center  pt-5">
                <HiInformationCircle className="size-5 w-[30%]" />
                <span className="text-slate-500">
                  Note There is auto-detect which can easily detect your inputed
                  text languages
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div
        className={
          !isOpen
            ? "hidden"
            : "md:w-[63%] lg:w-2/3 xl:w-1/2 xl:left-[26%] fixed overflow-auto bg-slate-400 rounded-xl w-4/5 h-4/5  p-4   mx-auto right-0 left-0 top-[10%]"
        }
      >
        <div className="flex justify-end" onClick={() => setIsOpen(false)}>
          <HiXCircle className="size-7 hover:text-white cursor-pointer transition-all duration-200" />
        </div>
        <div className="text-black flex flex-col justify-around h-[90%]">
          <h2 className="text-center  text-2xl font-serif font-semibold">
            Translated Text
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            libero error blapraesentium ducimus quidem reiciendis aliquam?
            Numquam consequatur dignissimos distinctio, aliquid nisi omnis
            itaque vero. Quasi repellat fuga et iste delectus necessitatibus
            adipisci dicta quis illum quod nobis quam alias ducimus, ea eligendi
            vel quaerat error assumenda reprehenderit, ratione magni provident
            enim nesciunt possimus? Voluptatem..
          </p>
          <button className="p-2 bg-white rounded-3xl flex justify-center items-center space-x-3  w-2/3 mx-auto">
            <GoCopy />
            <span>Copy Translated Text</span>
          </button>
        </div>
      </div>
    </div>
  );
}
