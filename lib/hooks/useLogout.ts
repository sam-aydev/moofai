import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { logout as logoutApi } from "../action";

export function useLogout() {
  const { status, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    mutationKey: ["auth"],
    onSuccess: () => {
      toast.success("Logout a success");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { logout, status };
}
