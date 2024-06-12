import AllLayout from "@/components/layout/AllLayout";
import FirstLayout from "@/components/layout/firstLayout";
import SecondLayout from "@/components/layout/secondLayout";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";
import { HiBars3CenterLeft } from "react-icons/hi2";

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
    <div className="grid grid-cols-12 gap-6 h-screen">
      <FirstLayout />
      <div className="col-span-12 sm:col-span-8 md:col-span-9 h-screen sm:overflow-y-scroll bg-white p-4 ">
        <div className=" p-4">{children}</div>
      </div>{" "}
    </div>
  );
}
