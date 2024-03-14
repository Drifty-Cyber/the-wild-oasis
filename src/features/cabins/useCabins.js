import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  // const queryClient = useQueryClient();

  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  // PRE-FETCHING
  // queryClient.prefetchQuery({
  //   queryKey: ["cabins"],
  //   queryFn: getCabins,
  // });

  return { cabins, isLoading };
}
