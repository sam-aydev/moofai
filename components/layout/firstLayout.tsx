"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiImages, BiUser } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { MdDashboard, MdOutlinePayments } from "react-icons/md";

import { AiFillAudio } from "react-icons/ai";

export default function FirstLayout() {
  const pathname = usePathname();

  return (
    <div className=" sm:h-screen sm:grid  sm:col-span-4  lg:col-span-3 bg-none bg-slate-200   sm:p-2">
      <ul className="border-t-2 bg-slate-300 border-t-black space-x-4 sm:border-none w-full px-3 py-2  md:px-3 md:py-2 justify-between items-center  flex right-0 left-0  sm:flex-col sm:px-0 sm:bg-transparent fixed bottom-0 sm:static sm:justify-normal sm:mt-10  sm:w-full sm:mx-auto">
        <Link href="/app">
          <li
            className={
              pathname === "/app"
                ? "sm:mb-8  w-fit sm:w-[200px] sm:flex sm:space-x-8 sm:items-center sm:justify-start  sm:px-2 bg-black  text-center text-white  sm:font-medium sm:text-[16px] text-[10px] p-1 rounded sm:py-2   "
                : "sm:mb-8  w-fit sm:w-[200px] sm:flex sm:space-x-8 sm:items-center sm:justify-start sm:px-2 bg-white text-black text-center  sm:text-[16px] text-[10px] p-1 sm:py-2   rounded  hover:bg-black hover:text-white"
            }
          >
            <MdDashboard className="size-4  mx-auto text-center sm:mx-0 sm:size-6" />

            <span className=" sm:flex text-center sm:justify-center sm:items-center">
              Dashboard
            </span>
          </li>
        </Link>

        <Link href="/app/tts">
          <li
            style={{ marginLeft: "-16px" }}
            className={
              pathname === "/app/tts"
                ? "sm:mb-8  w-fit sm:w-[200px] sm:flex sm:items-center sm:justify-start sm:px-2 sm:space-x-8 bg-black  text-center text-white  sm:font-medium sm:text-[16px] text-[10px] p-1 rounded sm:py-2   "
                : "sm:mb-8  w-fit sm:w-[200px] sm:flex sm:items-center sm:justify-start sm:px-2 sm:space-x-8 bg-white text-black text-center  sm:text-[16px] text-[10px] p-1 sm:py-2   rounded  hover:bg-black hover:text-white"
            }
          >
            <AiFillAudio className="size-4  mx-auto text-center sm:mx-0 sm:size-6" />
            <span className="sm:hidden">TTS</span>
            <span className="hidden sm:flex text-center sm:justify-center sm:items-center">
              Text To Speech
            </span>
          </li>
        </Link>

        <Link href="/app/tti">
          <li
            style={{ marginLeft: "-16px" }}
            className={
              pathname === "/app/tti"
                ? "sm:mb-8 w-fit sm:w-[200px]  sm:flex sm:space-x-8 sm:justify-start sm:px-2  bg-black text-center text-white font-semibold sm:font-medium sm:text-[16px] text-[10px] p-1  sm:py-2  rounded  "
                : "sm:mb-8 w-fit sm:w-[200px]  sm:flex sm:items-center sm:space-x-8 sm:px-2 sm:justify-start  bg-white text-black text-center font-semibold sm:font-medium sm:text-[16px] text-[10px] p-1 sm:py-2  rounded  hover:bg-black hover:text-white "
            }
          >
            <BiImages className="size-4  mx-auto text-center sm:mx-0 sm:size-6" />
            <span className="">Text To Image</span>
          </li>
        </Link>

        <Link href="/app/ask">
          <li
            style={{ marginLeft: "-16px" }}
            className={
              pathname === "/app/ask"
                ? "sm:mb-8 w-fit sm:w-[200px] sm:flex sm:space-x-8 sm:px-2 sm:justify-start bg-black  text-center text-white font-semibold sm:font-medium sm:text-[16px] text-[10px] p-1 sm:py-2 rounded  "
                : "sm:mb-8 w-fit sm:w-[200px] sm:flex sm:space-x-8 sm:px-2 sm:justify-start bg-white text-black text-center font-semibold sm:font-medium sm:text-[16px] text-[10px] p-1  sm:py-2 rounded hover:bg-black hover:text-white"
            }
          >
            <BsChat className="size-4  mx-auto text-center sm:mx-0 sm:size-6" />
            <span className="">Ask Anything</span>
          </li>
        </Link>

        <Link href="/app/billing">
          <li
            style={{ marginLeft: "-16px" }}
            className={
              pathname === "/app/billing"
                ? "sm:mb-8 w-fit sm:w-[200px] sm:flex sm:px-2 sm:space-x-8 sm:justify-start bg-black text-center text-white fomt-bold sm:font-medium sm:text-[16px] text-[10px] p-1 sm:py-2 rounded  "
                : "sm:mb-8 w-fit sm:w-[200px] sm:flex sm:px-2 sm:space-x-8 sm:justify-start bg-white text-black text-center font-bold sm:font-medium sm:text-[16px] text-[10px] p-1 sm:py-2 rounded  hover:bg-black hover:text-white"
            }
          >
            <MdOutlinePayments className="size-4 mx-auto text-center sm:mx-0 sm:size-6" />
            <span>Billing</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
