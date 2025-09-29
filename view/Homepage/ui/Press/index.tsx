"use client";
import React from "react";
import Slider from "react-slick";
export const Press = () => {
  const items = (
    <>
      <div className="bg-main-bg-block justify-center items-center flex p-10 flex-col gap-[10px]">
        <img src="/logo/coinmarketcap.svg" height="60px" />
        <span className="text-s leading-[21px] text-main-additional-text text-center">
          “The platform blends seamless onboarding with high-yield investment
          products, up to 100x leveraged futures, and intuitive tools built for
          speed and clarity.”
        </span>
      </div>
      <div className="border-2 border-main-bg-block justify-center items-center flex p-10 flex-col">
        <img src="/logo/coinmarketcap.svg" height="60px" />
        <span className="text-s leading-[21px] text-main-additional-text text-center">
          “The platform blends seamless onboarding with high-yield investment
          products, up to 100x leveraged futures, and intuitive tools built for
          speed and clarity.”
        </span>
      </div>
      <div className="bg-main-bg-block justify-center items-center flex p-10 flex-col">
        <img src="/logo/coinmarketcap.svg" height="60px" />
        <span className="text-s leading-[21px] text-main-additional-text text-center">
          “The platform blends seamless onboarding with high-yield investment
          products, up to 100x leveraged futures, and intuitive tools built for
          speed and clarity.”
        </span>
      </div>
      <div className="border-2 border-main-bg-block justify-center items-center flex p-10 flex-col">
        <img src="/logo/coinmarketcap.svg" height="60px" />
        <span className="text-s leading-[21px] text-main-additional-text text-center">
          “The platform blends seamless onboarding with high-yield investment
          products, up to 100x leveraged futures, and intuitive tools built for
          speed and clarity.”
        </span>
      </div>
      <div className="bg-main-bg-block justify-center items-center flex p-10 flex-col gap-[10px]">
        <img src="/logo/coinmarketcap.svg" height="60px" />
        <span className="text-s leading-[21px] text-main-additional-text text-center">
          “The platform blends seamless onboarding with high-yield investment
          products, up to 100x leveraged futures, and intuitive tools built for
          speed and clarity.”
        </span>
      </div>
      <div className="border-2 border-main-bg-block justify-center items-center flex p-10 flex-col">
        <img src="/logo/coinmarketcap.svg" height="60px" />
        <span className="text-s leading-[21px] text-main-additional-text text-center">
          “The platform blends seamless onboarding with high-yield investment
          products, up to 100x leveraged futures, and intuitive tools built for
          speed and clarity.”
        </span>
      </div>
    </>
  );

  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="title-h2">Press</h2>
      <div className="hidden xl:grid grid-cols-3 grid-rows-2">{items}</div>

      <div className="min-w-0 max-w-[230px] block xl:hidden">
        <Slider
          infinite
          slidesToShow={1}
          dots={false}
          centerMode
          centerPadding="0px"
          className="slider-no-arrows"
        >
          <div>
            <div className="bg-main-bg-block justify-center items-center flex p-3 flex-col gap-[10px] h-[216px]">
              <img src="/logo/coinmarketcap.svg" className="h-9" />
              <span className="flex text-xs leading-[18px]  text-main-additional-text text-center">
                “The platform blends seamless onboarding with high-yield
                investment products, up to 100x leveraged futures, and intuitive
                tools built for speed and clarity.”
              </span>
            </div>
          </div>
          <div>
            <div className="border-2 border-main-bg-block justify-center items-center flex p-3 flex-col h-[216px] min-w-[216px]">
              <img src="/logo/coinmarketcap.svg" className="h-9" />
              <span className="flex text-xs leading-[18px]  text-main-additional-text text-center">
                “The platform blends seamless onboarding with high-yield
                investment products, up to 100x leveraged futures, and intuitive
                tools built for speed and clarity.”
              </span>
            </div>
          </div>
          <div>
            <div className="bg-main-bg-block justify-center items-center flex p-3 flex-col h-[216px]">
              <img src="/logo/coinmarketcap.svg" className="h-9" />
              <span className="flex text-xs leading-[18px] text-main-additional-text text-center">
                “The platform blends seamless onboarding with high-yield
                investment products, up to 100x leveraged futures, and intuitive
                tools built for speed and clarity.”
              </span>
            </div>
          </div>
          <div>
            <div className="border-2 border-main-bg-block justify-center items-center flex p-3 flex-col h-[216px] min-w-[216px]">
              <img src="/logo/coinmarketcap.svg" className="h-9" />
              <span className="flex text-xs leading-[18px]  text-main-additional-text text-center">
                “The platform blends seamless onboarding with high-yield
                investment products, up to 100x leveraged futures, and intuitive
                tools built for speed and clarity.”
              </span>
            </div>
          </div>
          <div>
            <div className="bg-main-bg-block justify-center items-center flex p-3 flex-col h-[216px]">
              <img src="/logo/coinmarketcap.svg" className="h-9" />
              <span className="flex text-xs leading-[18px] text-main-additional-text text-center">
                “The platform blends seamless onboarding with high-yield
                investment products, up to 100x leveraged futures, and intuitive
                tools built for speed and clarity.”
              </span>
            </div>
          </div>
          <div>
            <div className="border-2 border-main-bg-block justify-center items-center flex p-3 flex-col h-[216px] min-w-[216px]">
              <img src="/logo/coinmarketcap.svg" className="h-9" />
              <span className="flex text-xs leading-[18px]  text-main-additional-text text-center">
                “The platform blends seamless onboarding with high-yield
                investment products, up to 100x leveraged futures, and intuitive
                tools built for speed and clarity.”
              </span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
