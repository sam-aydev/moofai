import { createAudio } from "@/lib/action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useCreateAudio() {
  const {
    data,
    error,
    status,
    mutate: getAudio,
  } = useMutation({
    mutationFn: createAudio,
    mutationKey: ["generateaudio"],
    onSuccess: () => {
      toast.success("Your audio is ready!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { data, getAudio, status, error };
}
