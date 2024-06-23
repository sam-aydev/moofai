import { getCurrentUser } from "@/supabase/client/action";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { data: user, status }: any = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["auth"],
    staleTime: 0,
  });
  return { user, status };
}
