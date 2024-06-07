"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";

export default function FirstLayout({ open, setOpen }: any) {
  const pathname = usePathname();

  return (
    <div
      className={
        !open
          ? "hidden  sm:grid min-h-screen  sm:static sm:col-span-4 md:col-span-3 bg-gray-200 p-4"
          : " fixed min-h-screen sm:grid sm:static sm:col-span-4 md:col-span-3 bg-gray-200 p-4"
      }
    >
      <div>
        <HiXMark
          onClick={() => setOpen(false)}
          className="size-8 cursor-pointer sm:hidden"
        />
      </div>
      <h2 className="font-bold text-xl md:text-2xl text-center mb-16 pt-10 sm:pt-0">
        Xocial
      </h2>
      <ul className="w-full lg:w-[80%] lg:mx-auto">
        <li
          className={
            pathname === "/app"
              ? "mb-8 w-full bg-black text-center text-white font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
              : "mb-8 w-full bg-white text-black text-center font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
          }
        >
          <Link href="/app">Tweet</Link>
        </li>

        <li
          className={
            pathname === "/app/notifications"
              ? "mb-8 w-full bg-black text-center text-white font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
              : "mb-8 w-full bg-white text-black text-center font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
          }
        >
          <Link href="/app/notifications">Notifications</Link>
        </li>

        <li
          className={
            pathname === "/app/people"
              ? "md:hidden mb-8 w-full bg-black text-center text-white font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
              : " md:hidden mb-8 w-full bg-white text-black text-center font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
          }
        >
          <Link href="/app/people">People</Link>
        </li>
        <li
          className={
            pathname === "/app/likedpost"
              ? "mb-8 w-full bg-black text-center text-white font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
              : "mb-8 w-full bg-white text-black text-center font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
          }
        >
          <Link href="/app/likedpost">Liked Posts</Link>
        </li>
        <li
          className={
            pathname === "/app/profile"
              ? "mb-8 w-full bg-black text-center text-white font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
              : "mb-8 w-full bg-white text-black text-center font-medium text-[16px] px-2 py-2 rounded hover:bg-black hover:text-white"
          }
        >
          <Link href="/app/profile">Profile</Link>
        </li>
      </ul>
      <div className="pt-10  md:w-[80%] md:mx-auto">
        <button className="w-full bg-white text-slate-800 text-center font-medium text-[16px] px-2 py-2 rounded hover:bg-slate-600 hover:text-white">
          Logout
        </button>
      </div>
    </div>
  );
}
