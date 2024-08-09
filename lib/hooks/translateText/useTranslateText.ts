import { TranslateAction } from "@/lib/action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useTranslateText() {
  const {
    data,
    error,
    status,
    mutate: translateText,
  } = useMutation({
    mutationFn: TranslateAction,
    mutationKey: ["translatetext"],
    onSuccess: () => {
      toast.success("Your trnaslated text is ready!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { data, translateText, status, error };
}
