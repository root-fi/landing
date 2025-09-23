import { Button } from "@/shared/ui/Button";
import React from "react";

export const CTA = () => {
  return (
    <div className="flex flex-col items-center mt-[-100px]">
      <h1 className="font-mont text-[300px] font-bold text-transparent bg-clip-text stroke-gradient-1">
        ROOT.FI
      </h1>
      <div className="h-[290px] mt-[-120px] relative w-full bg-[linear-gradient(270deg,_#10EDED_-0.53%,_#10EDC1_99.47%)] rounded-4xl flex items-center justify-center">
        <img
          className="absolute inset-0"
          src="images/cta-bg.png"
          width="100%"
        />
        <div className="flex flex-col z-1 gap-[18px] justify-center items-center">
          <span className="font-bold text-[48px] text-main-bg-block uppercase">
            Start earn smarter
          </span>
          <span className="text-xl font-medium text-main-bg-block">
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
