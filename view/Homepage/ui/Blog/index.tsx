"use client";
import { useGetPosts } from "@/entities/post/useGetPosts";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";
import React from "react";

export const Blog = () => {
  const { data } = useGetPosts(3);

  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="title-h2">Blog</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        {data?.map((item) => (
          <Link
            href={`/blog/${item.slug}`}
            key={item.id}
            className="transform transition duration-300 hover:-translate-y-[10px] flex flex-col bg-main-bg-block rounded-4xl overflow-hidden relative"
          >
            <span className="absolute rounded-[24px] flex justify-center items-center p-[6px_12px] top-5 left-5 before:backdrop-blur-[24px] before:bg-[rgba(0,0,0,0.4)] before:content-[''] before:w-full before:h-full before:absolute before:inset-0 before:rounded-[24px] text-white text-xs font-semibold">
              <span className="z-1">{item.publishedAt}</span>
            </span>

            <img src={item.image} className="aspect-[415/200] object-cover" />
            <div className="p-[24px_16px] md:p-[20px_32px_32px] flex flex-col gap-3">
              <span className="text-l-regular font-bold line-clamp-2">
                {item.title}
              </span>
              <span className="md:block hidden text-s leading-[21px] text-main-additional-text line-clamp-3">
                {item.description}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/blog">
        <Button variant="additional" size="l" className="w-[180px]">
          All articles
        </Button>
      </Link>
    </div>
  );
};
