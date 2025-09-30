import { getPosts } from "@/entities/post/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pageSizeParam = url.searchParams.get("page_size");
  const pageSize = pageSizeParam ? parseInt(pageSizeParam) : undefined;
  try {
    const response = await getPosts(pageSize);

    return NextResponse.json(response);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
