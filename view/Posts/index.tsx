"use client";

import classNames from "classnames";
import Link from "next/link";

import { useGetPosts } from "@/entities/post/useGetPosts";

export function Posts() {
  const { data } = useGetPosts();

  const main = data?.[0];

  return (
    <div className="pt-8 flex flex-col gap-8">
      <h1 className={classNames("title-h5 lg:text-[64px] text-center")}>
        Blog
      </h1>
      <Link href={`/blog/${main?.slug}`} className="block w-full">
        <div className="flex flex-col gap-6">
          <div className="flex w-full aspect-[16/9] relative overflow-hidden rounded-4xl">
            <span className="absolute z-1 rounded-[24px] flex justify-center items-center p-[6px_12px] top-5 left-5 before:backdrop-blur-[24px] before:bg-[rgba(0,0,0,0.4)] before:content-[''] before:w-full before:h-full before:absolute before:inset-0 before:rounded-[24px] text-white text-xs font-semibold">
              <span className="z-1">{main?.publishedAt}</span>
            </span>
            <img
              src={main?.image}
              alt="poster"
              className="flex object-cover absolute top-0 left-0 h-full w-full  "
            />
          </div>
          <span className="title-h2 line-clamp-2">{main?.title}</span>
        </div>
      </Link>
      <div className="w-full h-[1px] bg-main-stroke" />
      <div className="mx-auto grid lg:grid-cols-3 gap-4 grid-cols-1">
        {data?.slice(1)?.map((item) => (
          <Link
            key={item.id}
            href={`/blog/${item?.slug}`}
            className="rounded-4xl overflow-hidden flex flex-col bg-main-bg-block transform transition duration-300 hover:-translate-y-[10px]"
          >
            <div className="h-[200px] w-full relative">
              <span className="absolute z-1 rounded-[24px] flex justify-center items-center p-[6px_12px] top-5 left-5 before:backdrop-blur-[24px] before:bg-[rgba(0,0,0,0.4)] before:content-[''] before:w-full before:h-full before:absolute before:inset-0 before:rounded-[24px] text-white text-xs font-semibold">
                <span className="z-1">{main?.publishedAt}</span>
              </span>
              <img
                src={item?.image}
                alt="poster"
                className="w-full h-full object-cover rounded-4xl overflow-hidden"
              />
            </div>
            <div className={classNames("w-full")}>
              <div className="flex flex-col gap-3 h-full p-[20px_32px_32px]">
                <h3 className="text-l font-bold max-w-full overflow-hidden text-ellipsis whitespace-normal break-words line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-s text-main-additional-text overflow-hidden text-ellipsis whitespace-normal break-words line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
