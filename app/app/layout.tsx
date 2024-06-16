import FirstLayout from "@/components/layout/firstLayout";
import SecondLayout from "@/components/layout/secondLayout";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";
import { BiUserMinus } from "react-icons/bi";
import { CgUserRemove } from "react-icons/cg";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <div className="grid grid-rows-1 p-4 text-center  bg-slate-400  sm:bg-slate-200 sm:w-full text-black">
        <h2 className="flex font-bold  ">MoofAI</h2>{" "}
        <form
          // action={async function () {
          //   "use server";
          //   const { error } = await supabase.auth.signOut();
          //   if (error) throw new Error(error?.message);
          //   redirect("/login");
          // }}
        >
          <button>
            <BiUserMinus className="size-6" />{" "}
          </button>
        </form>
      </div>
      <div className="grid grid-cols-12  min-h-screen ">
        <FirstLayout />
        <div className="col-span-12 sm:col-span-8 lg:col-span-9 h-screen  bg-white p-2 ">
          <div className=" p-4">{children}</div>
        </div>{" "}
      </div>
    </div>
  );
}
