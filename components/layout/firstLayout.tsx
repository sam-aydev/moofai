"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsChat } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import { SlSpeech } from "react-icons/sl";

export default function FirstLayout() {
  const pathname = usePathname();

  return (
    <div className=" sm:min-h-screen sm:grid sm:static sm:col-span-4 md:col-span-3 bg-none sm:bg-gray-200 sm:p-4">
      <h2 className="hidden sm:flex font-bold text-xl md:text-2xl text-center mb-16 pt-10 sm:pt-0">
        Xocial
      </h2>
      <ul className="w-full px-3 py-2 justify-between items-center  flex right-0 left-0 bg-slate-200 sm:bg-none fixed bottom-0 sm:flex-none lg:w-[80%] lg:mx-auto">
        <li
          className={
            pathname === "/app"
              ? "sm:mb-8 w-fit sm:w-full bg-black text-center text-white font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
              : "sm:mb-8 w-fit sm:w-full bg-white text-black text-center font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
          }
        >
          <Link href="/app">
            <SlSpeech className="size-8 text-center hover:fill-white" />
            <span className="sm:flex hidden">Tweet</span>
          </Link>
        </li>

        <li
          className={
            pathname === "/app/notifications"
              ? "sm:mb-8 w-fit sm:w-full bg-black text-center text-white font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
              : "sm:mb-8 w-fit sm:w-full bg-white text-black text-center font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
          }
        >
          <Link href="/app/notifications">
            <BsChat className="size-8 text-center hover:fill-white" />
            <span className="sm:flex hidden">Notification</span>
          </Link>
        </li>

        <li
          className={
            pathname === "/app/people"
              ? "md:hidden sm:mb-8 w-fit sm:w-full bg-black text-center text-white font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
              : " md:hidden sm:mb-8 w-fit sm:w-full bg-white text-black text-center font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
          }
        >
          <Link href="/app/people">People</Link>
        </li>

        <li
          className={
            pathname === "/app/profile"
              ? "sm:mb-8 w-fit sm:w-full bg-black text-center text-white font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
              : "sm:mb-8 w-fit sm:w-full bg-white text-black text-center font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
          }
        >
          <Link href="/app/profile">Profile</Link>
        </li>
      </ul>
      {/* <div className="hidden sm:flex pt-10  md:w-[80%] md:mx-auto">
        <button className="w-full bg-white text-slate-800 text-center font-medium text-[16px] px-2 py-2 rounded hover:bg-slate-600 hover:text-white">
          Logout
        </button>
      </div> */}
    </div>
  );
}
