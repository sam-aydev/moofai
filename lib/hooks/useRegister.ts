import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
      toast.success("You are successfully registered!");
      router.push("/login");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { signUp, status, error };
}
