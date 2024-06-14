"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import { MdOutlinePayments } from "react-icons/md";
import textImage from "@/public/images.png";
import textSpeech from "@/public/text-to-speech-svgrepo-com.svg";
import { SlSpeech } from "react-icons/sl";

export default function FirstLayout() {
  const pathname = usePathname();

  return (
    <div className=" sm:min-h-screen sm:grid sm:static sm:col-span-4 md:col-span-3 bg-none bg-slate-300 border-r-2 border-r-black sm:p-4">
      <h2 className="hidden sm:flex font-bold text-xl justify-center items-center  my-10">
        MoofAI
      </h2>
      <ul className="border-t-2 border-t-black space-x-3 sm:border-none w-full px-3 py-2 justify-between items-center bg-slate-400   flex right-0 left-0  sm:flex-col  sm:bg-transparent fixed bottom-0 sm:static sm:justify-normal sm:flex-none sm:w-full lg:mx-auto">
        <li
          className={
            pathname === "/app"
              ? "sm:mb-8 w-fit sm:w-full bg-black text-center text-white font-semibold sm:font-medium sm:text-[16px] text-[10px] px-2 py-2 sm:py-4  rounded hover:bg-black hover:text-white"
              : "sm:mb-8 w-fit sm:w-full bg-white text-black text-center font-semibold sm:text-[16px] text-[10px] px-2 py-2 sm:py-4  rounded hover:bg-black hover:text-white"
          }
        >
          <Link href="/app">
            <SlSpeech className="size-4  mx-auto text-center hover:fill-white sm:hidden" />
            <span className="">Text To Speech</span>
          </Link>
        </li>

        <li
          className={
            pathname === "/app/notifications"
              ? "sm:mb-8 w-fit sm:w-full bg-black text-center text-white font-semibold sm:font-medium sm:text-[16px] text-[10px] px-2 py-2  sm:py-4  rounded hover:bg-black hover:text-white"
              : "sm:mb-8 w-fit sm:w-full bg-white text-black text-center font-semibold sm:font-medium sm:text-[16px] text-[10px] px-2 py-2 sm:py-4  rounded hover:bg-black hover:text-white"
          }
        >
          <Link href="/app/notifications">
            <BsChat className="size-4  mx-auto text-center hover:fill-white sm:hidden" />
            <span className="">Text To Image</span>
          </Link>
        </li>

        <li
          className={
            pathname === "/app/notifications"
              ? "sm:mb-8 w-fit sm:w-full bg-black text-center text-white font-semibold sm:font-medium sm:text-[16px] text-[10px] px-2 py-2 sm:py-4 rounded hover:bg-black hover:text-white"
              : "sm:mb-8 w-fit sm:w-full bg-white text-black text-center font-semibold sm:font-medium sm:text-[16px] text-[10px] px-2 py-2 sm:py-4 rounded hover:bg-black hover:text-white"
          }
        >
          <Link href="/app/notifications">
            <BsChat className="size-4  mx-auto text-center hover:fill-white sm:hidden" />
            <span className="">Ask Anything</span>
          </Link>
        </li>

        <li
          className={
            pathname === "/app/profile"
              ? "sm:mb-8 w-fit sm:w-full bg-black text-center text-white fomt-bold sm:font-medium sm:text-[16px] text-[10px] px-2 py-2 sm:py-4 rounded hover:bg-black hover:text-white"
              : "sm:mb-8 w-fit sm:w-full bg-white text-black text-center font-bold sm:font-medium sm:text-[16px] text-[10px] px-2 py-2 sm:py-4 rounded hover:bg-black hover:text-white"
          }
        >
          <Link href="/app/profile">
            <MdOutlinePayments className="size-4 mx-auto text-center hover:fill-white sm:hidden" />
            Billing
          </Link>
        </li>

        <li
          className={
            pathname === "/app/profile"
              ? "sm:mb-8 w-fit sm:w-full bg-black text-center text-white fomt-bold sm:font-medium sm:text-[16px] text-[10px] px-2 py-2 sm:py-4 rounded hover:bg-black hover:text-white"
              : "sm:mb-8 w-fit sm:w-full bg-white text-black text-center font-bold sm:font-medium sm:text-[16px] text-[10px] px-2 py-2 sm:py-4 rounded hover:bg-black hover:text-white"
          }
        >
          <Link href="/app/profile">
            <BiUser className="size-4 mx-auto text-center hover:fill-white sm:hidden" />
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
