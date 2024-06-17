import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { signUp as signUpApi } from "@/supabase/server/action";

export function useRegister() {
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
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { signUp, status, error };
}
