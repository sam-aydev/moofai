import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signUp as signUpApi } from "@/supabase/action";

export function useRegister() {
  const router = useRouter();
  const {
    error,
    status,
    mutate: signUp,
  } = useMutation({
    mutationFn: signUpApi,
    mutationKey: ["auth"],
    onSuccess: () => {
      toast.success(
        "You are registered! Check your email to confirm your email address"
      );
      router.push("/login");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { signUp, status, error };
}
