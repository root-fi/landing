import { Button } from "@/shared/ui/Button";
import React from "react";

export const OG = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <span className="title-h2 ">OG Access</span>
      <div className="rounded-4xl gap-6 md:gap-0 w-full bg-main-bg-block flex flex-col-reverse items-center lg:flex-row relative min-h-[258px]">
        <div className="flex-1 w-full px-4 lg:px-10 lg:pb-0 pb-6 gap-6 md:gap-8 flex flex-col justify-center">
          <span className="gradients-accent text-xl md:text-xxl font-bold text-center lg:text-left leading-[24px]">
            Join the circle of first movers. <br className="hidden md:block" />
            Mint NFT and unlock early access before launch
          </span>
          <div className="flex gap-4 w-full flex-col md:flex-row">
            <input
              type="email"
              aria-describedby="email-hint"
              placeholder="you@company.com"
              className="peer block w-full px-4 h-12 rounded-2xl bg-main-fields text-m placeholder-main-gray
             transition-colors duration-150
             border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue
             shadow-sm
             disabled:opacity-60 disabled:cursor-not-allowed"
            />

            <Button disabled className="w-full md:w-[180px]" size="m">
              Mint
            </Button>
          </div>
        </div>
        <div className="w-[460px] hidden lg:block" />
        <img
          src="/images/og.png"
          width={430}
          height={300}
          className="relative lg:absolute right-0 bottom-0"
        />
      </div>
    </div>
  );
};
