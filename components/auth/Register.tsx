"use client";
import { useRegister } from "@/lib/hooks/useRegister";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const { status, error, signUp } = useRegister();

  function handleSignUp(e: any) {
    e.preventDefault();
    if (!fullName || !email || !password) {
      setIsError(true);
      return;
    }
    signUp({ email, password, fullName });
  }

  return (
    <div className="bg-slate-200">
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSignUp}
          className="bg-white border-2 border-black p-4 rounded-md w-4/5 md:w-1/3 lg:w-1/2 xl:w-1/3"
        >
          <h2 className="text-center text-xl font-bold ">
            Register Into moofAI!
          </h2>
          {isError && (
            <p className="p-2 mt-6 font-semibold bg-slate-200 text-red-700">
              Please fill all the details!
            </p>
          )}
          <div className="mt-2">
            <label className="block">Username:</label>
            <input
              disabled={status === "pending"}
              onKeyDown={() => setIsError(false)}
              onChange={(e: any) => {
                setFullName(e.target.value);
                setIsError(false);
              }}
              type="text"
              name="name"
              id="name"
              className="border-2 w-full border-black rounded px-2 py-2 mt-2 "
            />
          </div>

          <div className="mt-1">
            <label className="block">Email:</label>
            <input
              disabled={status === "pending"}
              onKeyDown={() => setIsError(false)}
              onChange={(e: any) => {
                setEmail(e.target.value);
                setIsError(false);
              }}
              type="email"
              name="email"
              id="email"
              className="border-2 w-full border-black rounded px-2 py-2 mt-2 "
            />
          </div>

          <div className="mt-1">
            <label className="block">Password:</label>
            <input
              disabled={status === "pending"}
              onKeyDown={() => setIsError(false)}
              onChange={(e: any) => {
                setPassword(e.target.value);
                setIsError(false);
              }}
              type="password"
              name="password"
              id="password"
              className="border-2 w-full border-black rounded px-2 py-2 mt-2 "
            />
          </div>

          <div>
            <button
              disabled={status === "pending"}
              className="text-white bg-black border-2 border-white px-2 py-2 rounded w-full mt-2 hover:bg-slate-800"
            >
              Register Now
            </button>
          </div>
          <p className="text-slate-800">
            Already registered!{" "}
            <Link href="/login" className="hover:text-slate-200 font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
