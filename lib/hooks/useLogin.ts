import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signIn as signInApi } from "@/supabase/action";

export function useLogin() {
  const router = useRouter();
  const {
    error,
    status,
    mutate: signIn,
  } = useMutation({
    mutationFn: signInApi,
    mutationKey: ["auth"],
    onSuccess: () => {
      toast.success("Welcome to MoofAI!");
      router.push("/app");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { signIn, status, error };
}
