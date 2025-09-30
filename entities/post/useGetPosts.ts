import { useQuery } from "@tanstack/react-query";
import { Post } from "./api";

export const useGetPosts = (pageSize?: number) => {
  return useQuery({
    queryKey: ["useGetPosts", pageSize],
    queryFn: async () => {
      const response = await fetch(`/api/posts?page_size=${pageSize}`);

      const result = await response.json();
      return result as Post[];
    },
  });
};
