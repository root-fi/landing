import { notFound } from "next/navigation";
import { NotionAPI } from "notion-client";

import { getPost, getRelativePosts } from "@/entities/post/api";
import { PostPage } from "@/view/Post";

function extractPageId(url: string): string | null {
  const match = url.match(/([a-f0-9]{32})/);
  if (!match) return null;
  const id = match[1];
  return [
    id.substring(0, 8),
    id.substring(8, 12),
    id.substring(12, 16),
    id.substring(16, 20),
    id.substring(20),
  ].join("-");
}

export default async function BlogPosts({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post || !post.contentPage) return notFound();

  const notion = new NotionAPI();

  const pageId = extractPageId(post.contentPage);
  const recordMap = await notion.getPage(pageId!);
  const relativePosts = await getRelativePosts(post.category);

  return (
    <article className="mx-auto px-[10px] md:py-8 py-4">
      <PostPage
        recordMap={recordMap}
        post={post}
        relativePosts={relativePosts}
      />
    </article>
  );
}
