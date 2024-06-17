"use server";
import { redirect } from "next/navigation";
import { createClient } from ".";

export async function signIn({ email, password }: any) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  redirect("/app");
}

export async function signUp({ email, password, fullName }: any) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);
  redirect("/login");
}
