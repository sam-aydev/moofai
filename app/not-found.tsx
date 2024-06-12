import Link from "next/link";

export default function Notfound() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-slate-300 p-4">
        <div className="border-[6px] border-double border-black p-4 rounded-md text-center">
          <p className="text-xl font-semibold ">
            You have Gone Through The Wrong Route!😎😫
          </p>
          <div className="w-full py-5">
            <p className="text-slate-600">
              Do you want To Visit The Home Page?{" "}
            </p>
            <button className="mt-3 rounded-lg bg-slate-50 border-2 border-black px-3 py-2 text-black w-2/3 hover:bg-slate-100 ">
              <Link href="/">Home</Link>
            </button>
            <p className="mt-5 text-slate-600">---------- or ---------</p>

            <button className="mt-3 rounded-lg bg-slate-50 border-2 border-black px-3 py-2 text-black w-2/3 hover:bg-slate-100 ">
              <Link href="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
