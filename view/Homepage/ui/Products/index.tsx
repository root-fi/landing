"use client";

import { AccordionContent, AccordionTrigger } from "@/shared/ui/Accordion";
import { Button } from "@/shared/ui/Button";
import { Accordion } from "radix-ui";
import React, { useState } from "react";

export const Products = () => {
  const [value, setValue] = useState<string | undefined>("earn");
  return (
    <div className="mt-[140px] flex flex-col gap-3 items-center">
      <h1 className="font-mont text-[140px] font-bold text-transparent bg-clip-text stroke-gradient">
        OUR PRODUCTS
      </h1>
      <div className="flex flex-col gap-20">
        <div className="bg-main-bg-block shadow-[0_0_32px_0_#00000080] w-full h-[460px] rounded-4xl flex">
          <div className="w-[50%] h-full p-[24px_40px] flex flex-col gap-4">
            <div className="flex justify-between gap-4">
              <div className="flex flex-col gap-2 items-baseline">
                <span className="text-xl font-bold">Earn</span>
                <span className="text-s text-main-additional-text">
                  Put your crypto to work
                </span>
              </div>
              <Button>Earn</Button>
            </div>
            <Accordion.Root
              className="AccordionRoot"
              type="single"
              collapsible
              onValueChange={(v) => setValue(v || "earn")}
            >
              <Accordion.Item className="AccordionItem" value="dual">
                <AccordionTrigger>Duals</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </Accordion.Item>

              <Accordion.Item className="AccordionItem" value="yields">
                <AccordionTrigger>Smart Yields</AccordionTrigger>
                <AccordionContent>
                  Yes. It's unstyled by default, giving you freedom over the
                  look and feel.
                </AccordionContent>
              </Accordion.Item>

              <Accordion.Item className="AccordionItem" value="vault">
                <AccordionTrigger>Vault</AccordionTrigger>
                <Accordion.Content className="AccordionContent">
                  <div className="AccordionContentText">
                    Yes! You can animate the Accordion with CSS or JavaScript.
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
          <div className="w-[50%] h-full">
            <img src={`/images/${value}.png`} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col overflow-hidden bg-main-bg-block rounded-4xl shadow-[0px_0px_32px_0px_#00000080]">
            <img src="/images/trade.png" width="100%" />
            <div className="p-[24px_40px] flex gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-xl font-bold">Trade vs Markets</span>
                <span className="text-s leading-[21px] text-main-additional-text">
                  Earn fees for optimizing yield, risk, and liquidity. Earn fees
                  for optimizing yield, risk, and liquidity.
                </span>
              </div>
              <Button>Trade</Button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden bg-main-bg-block rounded-4xl shadow-[0px_0px_32px_0px_#00000080]">
            <img src="/images/battle.png" width="100%" />
            <div className="p-[24px_40px] flex gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-xl font-bold">Trader vs Trader</span>
                <span className="text-s leading-[21px] text-main-additional-text">
                  Earn fees for optimizing yield, risk, and liquidity. Earn fees
                  for optimizing yield, risk, and liquidity.
                </span>
              </div>
              <Button>Trade</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
