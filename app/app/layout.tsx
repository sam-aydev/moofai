import FirstLayout from "@/components/layout/firstLayout";
import SecondLayout from "@/components/layout/secondLayout";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const supabase = await createClient();
  // const { data, error } = await supabase.auth.getUser();
  // if (error || !data?.user) {
  //   redirect("/login");
  // }
  return (
    <div className="grid grid-cols-12  min-h-screen ">
      <FirstLayout />
      <div className="col-span-12 sm:col-span-5 md:col-span-5 lg:col-span-7 h-screen  bg-slate-100 p-2 ">
        <div className=" p-4">{children}</div>
      </div>{" "}
      <div className="hidden sm:grid sm:bg-slate-200 sm:w-full sm:col-span-4 md:col-span-4 lg:col-span-3 text-black border-l-2 border-l-black">
        Whatsapp
      </div>
    </div>
  );
}
