import { databaseSourceId, notion } from "@/shared/lib/notion";

export type Post = {
  id: string;
  title: string;
  description: string;
  image: string | undefined;
  slug: string;
  contentPage: string | undefined;
  createAt: string;
  category: string;
  author: string;
  avatar: string | undefined;
  published: boolean;
  publishedAt: string;
};

export async function getPosts(page_size?: number): Promise<Post[]> {
  const response = await notion.dataSources.query({
    data_source_id: databaseSourceId,
    page_size,
  });

  return response.results
    .map(mapPost)
    .filter((item) => item.published)
    .sort(
      (a, b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
    );
}

export async function getPost(slug: string): Promise<Post> {
  const response = await notion.dataSources.query({
    data_source_id: databaseSourceId,
    page_size: 1,
    filter: {
      property: "slug",
      rich_text: {
        equals: slug,
      },
    },
  });

  return response.results.map(mapPost)[0];
}

export async function getRelativePosts(category: string): Promise<Post[]> {
  const response = await notion.dataSources.query({
    data_source_id: databaseSourceId,
    page_size: 5,

    filter: {
      property: "category",
      rich_text: {
        equals: category,
      },
    },
  });

  return response.results.map(mapPost).filter((item) => item.published);
}

const mapPost = (page: any) => {
  const props = page.properties;
  return {
    id: page.id,
    title: props.title?.title[0]?.plain_text,
    description: props.description?.rich_text[0]?.plain_text || "",
    image: props.image?.files[0]?.file?.url,
    slug: props.slug?.rich_text[0]?.plain_text ?? page.id,
    contentPage: props.content?.url,
    createAt: page.created_time,
    category: props.category?.rich_text[0]?.plain_text,
    author: props.author?.rich_text[0]?.plain_text,
    avatar: props.avatar?.files[0]?.file?.url,
    published: props.published.checkbox,
    publishedAt: props.publishedAt.date.start,
  };
};
