"use client";

import { AccordionContent, AccordionTrigger } from "@/shared/ui/Accordion";
import { Button } from "@/shared/ui/Button";
import { Accordion } from "radix-ui";
import React, { useState } from "react";

export const Products = () => {
  const [value, setValue] = useState<string | undefined>("earn");
  return (
    <div
      id={"products"}
      className="xl:mt-[140px] flex flex-col gap-3 items-center"
    >
      <h1 className="font-mont text-[40px] font-bold text-transparent bg-clip-text stroke-gradient xl:text-[140px] md:text-[90px] lg:text-[114px]">
        OUR PRODUCTS
      </h1>
      <div className="flex flex-col lg:gap-20 gap-5">
        <div className="bg-main-bg-block shadow-[0_0_32px_0_#00000080] w-full lg:h-[460px] rounded-4xl flex flex-col-reverse lg:flex-row overflow-hidden">
          <div className="lg:w-[50%] w-full h-full xl:p-[24px_40px_40px] p-[16px] flex flex-col gap-4">
            <div className="flex justify-between gap-4 md:flex-row flex-col">
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
                <AccordionTrigger>SafeRoot</AccordionTrigger>
                <AccordionContent>
                  Markets go up, markets go down — with SafeRoot, you win either
                  way. Earn crypto when prices rise, stables when they fall.
                </AccordionContent>
              </Accordion.Item>

              <Accordion.Item className="AccordionItem" value="yields">
                <AccordionTrigger>Root Yields</AccordionTrigger>
                <AccordionContent>
                  Put your assets to work the simple way. With Root Yield, you
                  plant tokens and harvest steady rewards — no complexity, just
                  growth.
                </AccordionContent>
              </Accordion.Item>

              <Accordion.Item className="AccordionItem" value="vault">
                <AccordionTrigger>Roots</AccordionTrigger>
                <AccordionContent>
                  Build wealth from the ground up. Roots are staking vaults that
                  reward you not only with yield but also a share of RootFi’s
                  revenue stream.
                </AccordionContent>
              </Accordion.Item>
              <Accordion.Item className="AccordionItem" value="staking">
                <AccordionTrigger>Liquid Roots</AccordionTrigger>
                <AccordionContent>
                  Keep your assets staked while staying flexible. With Liquid
                  Roots, you can use your staked tokens across the DeFi
                  ecosystem — no compromises.
                </AccordionContent>
              </Accordion.Item>
            </Accordion.Root>
          </div>
          <div className="lg:w-[50%] w-full h-full md:min-w-[520px]">
            <img
              src={`/images/${value}.png`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10">
          <div className="flex flex-col overflow-hidden bg-main-bg-block rounded-4xl shadow-[0px_0px_32px_0px_#00000080]">
            <img
              src="/images/trade.png"
              width="100%"
              className="w-full object-cover"
            />
            <div className="p-4 md:p-[24px_40px] flex gap-4 flex-col lg:flex-row">
              <div className="flex flex-col gap-2">
                <span className="text-xl font-bold">Trade vs Markets</span>
                <span className="text-s leading-[21px] text-main-additional-text">
                  Take control of tomorrow with PerpRoots. Trade perpetual
                  futures rooted in DeFi — flexible, powerful, and built for
                  every kind of strategy.
                </span>
              </div>
              <Button>Trade</Button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden bg-main-bg-block rounded-4xl shadow-[0px_0px_32px_0px_#00000080]">
            <img src="/images/battle.png" className="w-full object-cover" />
            <div className="p-4 md:p-[24px_40px] flex gap-4 flex-col lg:flex-row">
              <div className="flex flex-col gap-2">
                <span className="text-xl font-bold">Trader vs Trader</span>
                <span className="text-s leading-[21px] text-main-additional-text">
                  RootClash is where traders compete head-to-head in a fully
                  decentralized showdown. Skill and strategy decide who takes it
                  all.
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
