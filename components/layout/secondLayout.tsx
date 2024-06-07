"use client";
import { useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";

export default function SecondLayout({ children, setOpen }: any) {
  return (
    <div className="col-span-12 sm:col-span-8 md:col-span-9 h-screen sm:overflow-y-scroll bg-white p-4 ">
      <HiBars3CenterLeft
        onClick={() => setOpen(true)}
        className="sm:hidden cursor-pointer size-8"
      />
      <div className=" p-4">{children}</div>
    </div>
  );
}
