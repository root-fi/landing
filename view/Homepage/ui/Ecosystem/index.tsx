import React from "react";

const partners = [
  "orderly",
  "base",
  "euler",
  "bybit",
  "cow",
  "uniswap",
  "relay",
  "alchemy",
];

export const Ecosystem = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="title-h2">Ecosystem</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 rounded-4xl w-full overflow-hidden">
        {partners.map((img) => (
          <div
            key={img}
            className="h-[74px] md:h-30 w-full bg-main-bg-block flex items-center justify-center"
          >
            <img src={`/logo/${img}.svg`} className="md:h-auto h-[26px]" />
          </div>
        ))}
      </div>
    </div>
  );
};
