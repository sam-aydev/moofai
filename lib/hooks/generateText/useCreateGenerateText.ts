import { generateText } from "@/lib/action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useCreateGenerateText() {
  const {
    error,
    status,
    mutate: getText,
  } = useMutation({
    mutationFn: generateText,
    mutationKey: ["generatetext"],
    onSuccess: () => {
      toast.success("Your answer is ready!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { getText, status, error };
}
