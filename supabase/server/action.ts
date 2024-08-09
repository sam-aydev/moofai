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

export async function translateMyText({
  inputedText,
  expectedLanguage,
  inputedLanguage,
  result,
}: any) {
  const supabase = await createClient();
  if (!inputedLanguage || !inputedText || !expectedLanguage)
    throw new Error("Please add all infos!");
  if (!inputedText) throw new Error("No text to translate");
  const { data: profile, error: profileError } = await supabase.auth.getUser();

  const { data, error } = await supabase.from("translatedText").insert({
    myText: inputedText,
    translatedText: result,
    profileId: profile.user?.id,
  });
  if (error) throw new Error("There is error sending to database");
  if (profileError) throw new Error("No user found");
  return data;
}
