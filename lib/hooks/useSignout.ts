import { SignOut } from "@/supabase/client/action";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function useSignOut() {
  const router = useRouter();
  const {
    error,
    status: logoutStatus,
    mutate: logout,
  } = useMutation({
    mutationFn: SignOut,
    mutationKey: ["auth"],
    onSuccess: () => {
      toast.success("You are logged out");
      router.replace("/login");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { logout, logoutStatus, error };
}
