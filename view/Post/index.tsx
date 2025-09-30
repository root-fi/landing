"use client";

import React from "react";
import { NotionRenderer } from "react-notion-x";
import "./styles.css";
import { Post } from "@/entities/post/api";
import Link from "next/link";
import classNames from "classnames";
import { Button } from "@/shared/ui/Button";

type PostProps = {
  recordMap: any;
  post: Post;
  relativePosts: Post[];
};

export const PostPage = ({ recordMap, post, relativePosts }: PostProps) => {
  return (
    <div className="mx-auto flex flex-col gap-4 md:gap-8 max-w-[1280px]">
      <div className="flex md:items-center justify-between md:flex-row flex-col gap-4">
        <ul className="flex items-baseline ">
          <li className="flex">
            <Link className="text-xs" href="/blog">
              Blog&nbsp;&nbsp;
            </Link>
          </li>
          <li className="text-xs text-main-additional-text">
            /&nbsp;&nbsp;{post.title}
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <img
            src={post.avatar}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-s">{post.author}</span>
          <span className="text-s text-main-additional-text">|</span>
          <span className="text-s text-main-additional-text">
            {post.publishedAt}
          </span>
        </div>
      </div>

      <div className="w-full h-[1px] bg-main-stroke" />
      <div className="flex gap-8">
        <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={true} />
        <ul className={"hidden flex-col w-[368px] shrink-0 h-max lg:flex"}>
          {relativePosts.map((item) => (
            <li
              key={item.id}
              className={classNames(
                "p-[24px_16px] border-l-2 border-main-gray border-solid",
                {
                  ["border-main-text"]: item.id === post.id,
                }
              )}
            >
              <Link href={`/blog/${item.slug}`} className="text-m font-bold">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-[1px] bg-main-stroke lg:hidden flex" />
      <div className="lg:hidden flex flex-col gap-4 items-center">
        <h2 className="text-xxl font-bold">Related articles</h2>
        <div className="grid grid-cols-1 gap-4">
          {relativePosts
            ?.filter((item) => item.id !== post.id)
            .map((item) => (
              <Link
                href={`/blog/${item.slug}`}
                key={item.id}
                className="transform transition duration-300 hover:-translate-y-[10px] flex flex-col bg-main-bg-block rounded-4xl overflow-hidden relative"
              >
                <span className="absolute rounded-[24px] flex justify-center items-center p-[6px_12px] top-5 left-5 before:backdrop-blur-[24px] before:bg-[rgba(0,0,0,0.4)] before:content-[''] before:w-full before:h-full before:absolute before:inset-0 before:rounded-[24px] text-white text-xs font-semibold">
                  <span className="z-1">{item.publishedAt}</span>
                </span>

                <img
                  src={item.image}
                  className="aspect-[415/200] object-cover"
                />
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
        <Link href="/blog" className="w-full">
          <Button variant="additional" size="l" className="w-full">
            All articles
          </Button>
        </Link>
      </div>
    </div>
  );
};
