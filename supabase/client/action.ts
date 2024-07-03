import { createClient } from ".";

export async function SignOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function getAllAnswers() {
  const supabase = await createClient();
  const { data: profile, error: profileError } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("generatetext")
    .select("*")
    .order("createdAt", { ascending: false })
    .eq("profileId", profile.user?.id);

  if (!profile) throw new Error("No user found");
  if (profileError) throw new Error(error?.message);
  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}
