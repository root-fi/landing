import { getPosts } from "@/entities/post/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pageSizeParam = url.searchParams.get("page_size");
  const pageSize = pageSizeParam ? parseInt(pageSizeParam) : undefined;
  try {
    const response = await getPosts(pageSize);

    return NextResponse.json(response);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
