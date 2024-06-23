import { getAllAnswers } from "@/supabase/client/action";
import { useQuery } from "@tanstack/react-query";

export function useGenerateText() {
  const {
    data: generatedTextInfo,
    error: generatedTextInfoError,
    status: generatedTextInfoStatus,
  } = useQuery({
    queryKey: ["generatetext"],
    queryFn: getAllAnswers,
    staleTime: 0,
    // refetchInterval: 2000,
  });
  return { generatedTextInfo, generatedTextInfoStatus, generatedTextInfoError };
}
