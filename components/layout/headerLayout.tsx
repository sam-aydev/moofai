"use client";
import Image from "next/image";
import { GoSignOut } from "react-icons/go";
import Avatar from "@/public/avatar.png";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { useUser } from "@/lib/hooks/auth/useUser";
import { useSignOut } from "@/lib/hooks/auth/useSignout";

export default function HeaderLayout() {
  const { user, status } = useUser();
  const { logout, logoutStatus } = useSignOut();

  return (
    <div className="grid grid-rows-1 p-2 text-center  bg-slate-300  sm:bg-slate-200 sm:w-full text-black">
      <div className="flex justify-between">
        <div>
          <h2 className="flex font-bold  sm:ml-16 text-xl">MoofAI</h2>{" "}
        </div>
        <div className="flex space-x-6">
          <div className="flex space-x-2 justify-between items-center ">
            <p>{user?.user_metadata?.fullName}</p>
            <div className="rounded-full flex justify-center items-center cursor-pointer border-2 space-x-3 p-1 border-black ">
              <Image
                src={Avatar}
                alt="avatar"
                width={100}
                height={100}
                className="size-8"
              />
              <HiChevronDoubleRight className="size-4" />
            </div>
          </div>
          <button
            disabled={logoutStatus === "pending"}
            onClick={() => logout()}
          >
            <GoSignOut className="size-6" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
