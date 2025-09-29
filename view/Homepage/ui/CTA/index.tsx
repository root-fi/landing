import { Button } from "@/shared/ui/Button";
import React from "react";

export const CTA = () => {
  return (
    <div className="flex flex-col items-center xl:mt-[-100px]">
      <h1 className="font-mont text-[80px] font-bold text-transparent bg-clip-text stroke-gradient-1 xl:text-[300px] lg:text-[230px] md:text-[160px]">
        ROOT.FI
      </h1>
      <div className="h-[290px] lg:mt-[-40px] relative w-full bg-[linear-gradient(270deg,_#10EDED_-0.53%,_#10EDC1_99.47%)] rounded-4xl flex items-center justify-center overflow-hidden">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="images/cta-bg.png"
          width="100%"
        />
        <div className="flex flex-col z-1 gap-[18px] justify-center items-center">
          <span className="font-bold lg:text-[48px] text-[32px] text-main-bg-block uppercase text-center">
            Start earn smarter
          </span>
          <span className="lg:text-xl text-[16px] font-medium text-main-bg-block text-center">
            Maximize Yield. Minimize Complexity.
          </span>
          <Button size="l" className="w-[280px] mt-[22px]" variant="default">
            Launch App
          </Button>
        </div>
      </div>
    </div>
  );
};
