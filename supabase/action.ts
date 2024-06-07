"use server";
import { redirect } from "next/navigation";
import { createClient } from "./server";

// export async function getCurrentUser() {
//   const supabase = await createClient();
//   const { data: session } = await supabase.auth.getSession();
//   if (!session.session) return null;

//   const { data, error } = await supabase.auth.getUser();

//   if (error) throw new Error(error.message);

//   return data?.user;
// }

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

export async function SignOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
  redirect("/login");
}
