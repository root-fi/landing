import React from "react";
import { BaseIcon } from "@/shared/ui/BaseIcon";
import { Products } from "./ui/Products";
import { OG } from "./ui/OG";
import { Ecosystem } from "./ui/Ecosystem";
import { Press } from "./ui/Press";
import { Blog } from "./ui/Blog";
import { CTA } from "./ui/CTA";

export const Homepage = () => {
  return (
    <div className="relative flex justify-center flex-col items-center">
      <div className="relative w-full h-[600px] overflow-hidden flex justify-center">
        <video
          className="absolute top-0 w-full max-w-[1920px] h-[600px] left-auto object-cover -z-10"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/60.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute p-[140px_0] top-0 w-full max-w-[1300px] px-[10px] h-full left-[auto] object-cover -z-10 flex flex-col gap-10">
        <h1
          className="font-mont block text-center font-montserrat font-bold text-[64px] leading-[78px] 
      bg-gradient-to-b from-white to-[#ADFFFF] 
      bg-clip-text text-white 
      [text-shadow:0px_0px_6px_rgba(16,237,237,0.4),0px_0px_40px_#10EDED]"
        >
          NEXT-GENERATION
          <br /> YIELD PLATFORM & DEFI TRADING
        </h1>
        <span className="block font-mont text-center text-[20px] leading-[32px] font-medium">
          Maximize Yield. Minimize Complexity.
        </span>
        <div className="py-4 m-[0_auto] w-full max-w-[800px] h-[60px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0)_100%)] flex gap-[56px] items-center justify-center">
          <div className="flex items-center gap-2">
            <BaseIcon icon="Earn" size={27} />
            <span className="text-l-regular">Earn</span>
          </div>
          <div className="flex items-center gap-2">
            <BaseIcon icon="Trade" size={27} />
            <span className="text-l-regular">Trade</span>
          </div>
          <div className="flex items-center gap-2">
            <BaseIcon icon="Compete" size={27} />
            <span className="text-l-regular">Compete</span>
          </div>
        </div>
        <div className="h-[150px] m-[0_auto] w-full max-w-[460px] rounded-[32px] bg-main-bg-block p-[32px_60px] shadow-[0px_0px_32px_0px_#00000080] flex gap-10 items-center">
          {/* <div className="flex gap-1 flex-col items-center">
            <span className="text-m">
              Rated <b className="font-bold text-medium-green">4.9</b> on
            </span>
            <img src="/images/trustpilot.svg" />
          </div>
          <div className="bg-main-stroke w-[1px] h-[98px]" /> */}
          <div className="flex gap-1 flex-col items-center">
            <span className="text-m">Audited by</span>
            <img src="/images/certik.svg" />
          </div>
          <div className="bg-main-stroke w-[1px] h-[98px]" />
          <div className="flex gap-1 flex-col items-center">
            <span className="text-m">Built with</span>
            <img src="/images/openzeplin.svg" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1300px] px-[10px] flex flex-col gap-[140px]">
        <Products />
        <OG />
        <Ecosystem />
        <Press />
        <Blog />
        <CTA />
      </div>
    </div>
  );
};
