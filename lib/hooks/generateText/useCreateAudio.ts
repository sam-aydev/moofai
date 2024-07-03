import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

async function createAudio(text: string) {
  const res = await fetch("/api/audio", {
    method: "POST",
    body: JSON.stringify(text),
  });
  if (!res.ok) throw new Error("error contacting api");
  return await res.json();
}

export function useCreateAudio() {
  const {
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
  return { getAudio, status, error };
}
