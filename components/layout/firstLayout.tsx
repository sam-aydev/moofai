"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiImages, BiUser } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";

import { AiFillAudio } from "react-icons/ai";

export default function FirstLayout() {
  const pathname = usePathname();

  return (
    <div className=" sm:min-h-screen sm:grid sm:static sm:col-span-3 md:col-span-3 lg:col-span-2 bg-none bg-slate-300 border-r-2 border-r-black sm:p-2">
      <h2 className="hidden sm:flex font-bold text-xl justify-center items-center  ">
        MoofAI
      </h2>
      <ul className="border-t-2 border-t-black space-x-4 sm:border-none w-full px-3 py-2 sm:py-0 md:px-3 md:py-2 justify-between items-center bg-slate-400   flex right-0 left-0  sm:flex-col sm:px-0 sm:bg-transparent fixed bottom-0 sm:static sm:justify-center  sm:w-full sm:mx-auto">
        <li
          className={
            pathname === "/app"
              ? "sm:mb-8  w-fit sm:w-full bg-black  text-center text-white font-semibold sm:font-medium sm:text-[16px] text-[10px] p-1 rounded sm:py-2   hover:bg-white hover:text-black"
              : "sm:mb-8  w-fit sm:w-full bg-white text-black text-center font-semibold sm:text-[16px] text-[10px] p-1 sm:py-2   rounded  hover:bg-black hover:text-white"
          }
        >
          <Link href="/app">
            <AiFillAudio className="size-4  mx-auto text-center sm:size-6" />
            <span className="sm:hidden">TTS</span>
            <span className="hidden sm:flex text-center sm:justify-center sm:items-center">
              Text To Speech
            </span>
          </Link>
        </li>

        <li
          style={{ marginLeft: "0px" }}
          className={
            pathname === "/app/tti"
              ? "sm:mb-8 w-[75px] sm:w-full   bg-black text-center text-white font-semibold sm:font-medium sm:text-[16px] text-[10px] p-1  sm:py-2  rounded  hover:bg-white hover:text-black"
              : "sm:mb-8 w-[75px] sm:w-full   bg-white text-black text-center font-semibold sm:font-medium sm:text-[16px] text-[10px] p-1 sm:py-2  rounded  hover:bg-black hover:text-white "
          }
        >
          <Link href="/app/tti">
            <BiImages className="size-4  mx-auto text-center sm:size-6" />
            <span className="">Text To Image</span>
          </Link>
        </li>

        <li
          style={{ marginLeft: "0px" }}
          className={
            pathname === "/app/ask"
              ? "sm:mb-8 w-[74px] sm:w-full bg-black  text-center text-white font-semibold sm:font-medium sm:text-[16px] text-[10px] p-1 sm:py-2 rounded  hover:bg-white hover:text-black"
              : "sm:mb-8 w-[74px] sm:w-full  bg-white text-black text-center font-semibold sm:font-medium sm:text-[16px] text-[10px] p-1  sm:py-2 rounded hover:bg-black hover:text-white"
          }
        >
          <Link href="/app/ask">
            <BsChat className="size-4  mx-auto text-center sm:size-6" />
            <span className="">Ask Anything</span>
          </Link>
        </li>

        <li
          style={{ marginLeft: "0px" }}
          className={
            pathname === "/app/profile"
              ? "sm:mb-8 w-14 sm:w-full bg-black text-center text-white fomt-bold sm:font-medium sm:text-[16px] text-[10px] p-1 sm:py-2 rounded  hover:bg-white hover:text-black"
              : "sm:mb-8 w-14 sm:w-full bg-white text-black text-center font-bold sm:font-medium sm:text-[16px] text-[10px] p-1 sm:py-2 rounded  hover:bg-black hover:text-white"
          }
        >
          <Link href="/app/profile">
            <MdOutlinePayments className="size-4 mx-auto text-center sm:size-6" />
            Billing
          </Link>
        </li>

        <li
          style={{ marginLeft: "0px" }}
          className={
            pathname === "/app/profile"
              ? "sm:mb-8 w-14 sm:w-full bg-black text-center text-white fomt-bold sm:font-medium sm:text-[16px] text-[10px] p-1 sm:py-2 rounded  hover:bg-white hover:text-black"
              : "sm:mb-8 w-14 sm:w-full bg-white text-black text-center font-bold sm:font-medium sm:text-[16px] text-[10px] p-1 sm:py-2 rounded  hover:bg-black hover:text-white"
          }
        >
          <Link href="/app/profile">
            <BiUser className="size-4 mx-auto text-center sm:size-6" />
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
