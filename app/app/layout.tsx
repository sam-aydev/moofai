import FirstLayout from "@/components/layout/firstLayout";
import HeaderLayout from "@/components/layout/headerLayout";
import SecondLayout from "@/components/layout/secondLayout";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

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
    <div className="">
      <HeaderLayout />
      <div className="grid grid-cols-12  ">
        <FirstLayout />
        <div className=" col-span-12 sm:col-span-8 lg:col-span-9 h-screen  bg-white p-2">
          <div className=" p-2  pb-16">{children}</div>
        </div>{" "}
      </div>
    </div>
  );
}
