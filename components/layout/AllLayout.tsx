"use client";

import { useState } from "react";
import FirstLayout from "./firstLayout";
import SecondLayout from "./secondLayout";

export default function AllLayout({ children }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid grid-cols-12 gap-6 h-screen">
      <FirstLayout setOpen={setOpen} open={open} />
      <SecondLayout children={children} setOpen={setOpen} />
    </div>
  );
}
