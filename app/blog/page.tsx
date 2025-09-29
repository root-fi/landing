import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { notFound } from "next/navigation";

import { getPosts } from "@/entities/post/api";
import { Posts } from "@/view/Posts";

export default async function BlogPosts() {
  const queryClient = new QueryClient();

  try {
    await queryClient.fetchQuery({
      queryKey: ["useGetPosts", undefined],
      queryFn: async () => {
        const response = await getPosts();

        return response;
      },
    });
  } catch (e) {
    //console.log(e, "eeror");
    return notFound();
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <article className="mx-auto max-w-[1200px] px-[40px]">
        <Posts />
      </article>
    </HydrationBoundary>
  );
}
