"use client";

import { useCreateGenerateText } from "@/lib/hooks/generateText/useCreateGenerateText";
import { useGenerateText } from "@/lib/hooks/generateText/useGenerateText";
import { useState } from "react";
import { AiFillCopy } from "react-icons/ai";
import { BiCopy, BiEdit } from "react-icons/bi";
import { MdCopyAll, MdDeleteForever } from "react-icons/md";

export default function GenerateText() {
  const [question, setQuestion] = useState<string>("");
  const { status, getText } = useCreateGenerateText();
  const { generatedTextInfo, generatedTextInfoStatus, generatedTextInfoError } =
    useGenerateText();

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(question);
    getText(question);
  }
  if (generatedTextInfoStatus === "success") console.log(generatedTextInfo);

  return (
    <div>
      <div className="pb-14 md:pb-0">
        <div className="mt-6  lg:mx-auto lg:w-2/3">
          <form action="" onSubmit={handleSubmit}>
            <div>
              <textarea
                value={question}
                onChange={(e: any) => setQuestion(e.target.value)}
                name="tts"
                id="tts"
                rows={3}
                placeholder="Ask...."
                className="border-2 border-black rounded w-full resize-none p-2"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                disabled={status === "pending"}
                className="p-2 w-1/2  sm:w-1/3 text-center bg-black text-white rounded hover:bg-slate-800"
              >
                Generate Answer
              </button>
            </div>
          </form>
        </div>

        {generatedTextInfo?.map((info: any) => (
          <div className="mt-20">
            <p className="text-xl font-semibold">{info.question}</p>
            <p className="">{info.generatedAnswer}</p>
            <div className="flex space-x-3">
              <MdCopyAll className="size-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
