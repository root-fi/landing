import { databaseSourceId, notion } from "@/shared/lib/notion";

export async function getPosts(page_size?: number) {
  const response = await notion.dataSources.query({
    data_source_id: databaseSourceId,
    page_size,
  });

  return response.results
    .map((page: any) => {
      const props = page.properties;
      return {
        id: page.id,
        title: props.title?.title[0]?.plain_text,
        description: props.description?.rich_text[0]?.plain_text || "",
        image: props.image?.files[0]?.file?.url || null,
        slug: props.slug?.rich_text[0]?.plain_text ?? page.id,
        contentPage: props.content?.url || null,
        createAt: page.created_time,
      };
    })
    .sort(
      (a, b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
    );
}

export async function getPost(slug: string) {
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

  return response.results.map((page: any) => {
    const props = page.properties;
    return {
      id: page.id,
      title: props.title?.title[0]?.plain_text,
      description: props.description?.rich_text[0]?.plain_text || "",
      image: props.image?.files[0]?.file?.url || null,
      slug: props.slug?.rich_text[0]?.plain_text ?? page.id,
      contentPage: props.content?.url || null,
      createAt: page.created_time,
    };
  })[0];
}
