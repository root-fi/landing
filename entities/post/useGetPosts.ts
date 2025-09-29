import { useQuery } from "@tanstack/react-query";

import { getPosts } from "./api";

export const useGetPosts = (pageSize?: number) => {
  return useQuery({
    queryKey: ["useGetPosts", pageSize],
    queryFn: async () => {
      const response = await getPosts(pageSize);

      return response;
    },
    staleTime: 1000 * 60,
    retry: 0,
    refetchInterval: 1000 * 60 * 5,
  });
};
