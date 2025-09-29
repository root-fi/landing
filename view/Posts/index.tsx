"use client";

import classNames from "classnames";
import Link from "next/link";

import { useGetPosts } from "@/entities/post/useGetPosts";

export function Posts() {
  const { data } = useGetPosts();

  const main = data?.[0];

  return (
    <div className="pt-8 flex flex-col gap-8">
      <h1 className={classNames("title-h1 text-center")}>Blog</h1>
      <Link href={`/blog/${main?.slug}`} className="block w-full">
        <div className="flex flex-col gap-6">
          <div className="flex w-full  aspect-[16/9] relative overflow-hidden rounded-4xl">
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
