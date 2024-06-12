"use client";

import { useLogin } from "@/lib/hooks/useLogin";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const { status, error, signIn } = useLogin();

  function handleLogin(e: any) {
    e.preventDefault();
    if (!email || !password) {
      setIsError(true);
      return;
    }
    signIn({ email, password });
  }

  return (
    <div className="bg-slate-200">
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleLogin}
          className="bg-white border-2 border-black p-4 rounded-md w-4/5 md:w-1/3 lg:w-1/2 xl:w-1/3"
        >
          <h2 className="text-center text-xl font-bold ">
            Login To Your Account!
          </h2>

          {isError && (
            <p className="p-2 mt-6 font-semibold bg-slate-200 text-red-700">
              Please fill all the details!
            </p>
          )}
          <div className="mt-1">
            <label className="block">Email:</label>
            <input
              disabled={status === "pending"}
              onChange={(e: any) => setEmail(e.target.value)}
              onKeyDown={() => setIsError(false)}
              required
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
              onChange={(e: any) => setPassword(e.target.value)}
              onKeyDown={() => setIsError(false)}
              type="password"
              name="password"
              id="password"
              required
              className="border-2 w-full border-black rounded px-2 py-2 mt-2 "
            />
          </div>

          <div>
            <button
              disabled={status === "pending"}
              className="text-white bg-black border-2 border-white px-2 py-2 rounded w-full mt-2 hover:bg-slate-800"
            >
              Sign In
            </button>
          </div>

          <p className="text-slate-800 ">
            Don't have an account!{" "}
            <Link href="/signup" className="hover:text-slate-200 font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
