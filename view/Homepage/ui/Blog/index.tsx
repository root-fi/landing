import { Button } from "@/shared/ui/Button";
import React from "react";

export const Blog = () => {
  const item = (
    <div className="flex flex-col bg-main-bg-block rounded-4xl overflow-hidden">
      <img src="/images/earn.png" className="aspect-[415/200] object-cover" />
      <div className="p-[24px_16px] md:p-[20px_32px_32px] flex flex-col gap-3">
        <span className="text-l-regular font-bold line-clamp-2">
          Cryptocurrency Risk in 2025: A Complete Guide for Beginners
        </span>
        <span className="md:block hidden text-s leading-[21px] text-main-additional-text line-clamp-3">
          Cryptocurrency, which began with Bitcoin, has grown into a
          multi-trillion-dollar industry, with hundreds of assets and with a
          current total
        </span>
      </div>
    </div>
  );
  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="title-h2">Blog</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        {item}
        {item}
      </div>
      <Button variant="additional" size="l" className="w-[180px]">
        All articles
      </Button>
    </div>
  );
};
