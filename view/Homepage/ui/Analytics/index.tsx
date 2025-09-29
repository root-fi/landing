"use client";

import Lottie from "lottie-react";
import React from "react";
import animation from "./Graphic.json";

export const Analytics = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="title-h2">DeFi Analytics</h2>
      <div>
        <Lottie
          animationData={animation}
          //style={style}
          loop={false}
          autoplay={false}
          interactivity={{
            mode: "scroll",
            actions: [
              {
                visibility: [0, 0.3],
                type: "stop",
                frames: [0],
              },
              {
                visibility: [0.3, 0.8],
                type: "play",
                frames: [0, 120],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};
