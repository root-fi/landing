"use client";

import { Button } from "@/shared/ui/Button";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Burger from "./Burger";

export const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const diff = currentScroll - lastScroll;

      if (currentScroll < 65) {
        setVisible(true);
        setLastScroll(currentScroll);
        return;
      }

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          setVisible(false);
        } else {
          setVisible(true);
        }
        setLastScroll(currentScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 w-full transition-transform duration-300 z-5",
        visible ? "translate-y-0" : "-translate-y-full",
        "  bg-main-bg "
      )}
    >
      <div className="absolute bottom-0 w-full h-[1px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)]" />
      <div className="m-[0_auto] flex items-center justify-between max-w-[1300px] px-[10px] w-full h-[65px]">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={97}
            height={24}
            className="lg:w-[138px] lg:h-[34px]"
          />
        </Link>
        <ul className="gap-20 lg:flex hidden">
          <li>
            <Link
              href="/#products"
              className="text-main-additional-text text-m font-semibold hover:text-main-text transition-colors duration-200 ease-in-out"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-main-additional-text text-m font-semibold hover:text-main-text transition-colors duration-200 ease-in-out"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="https://docs.rootfi.org/"
              className="text-main-additional-text text-m font-semibold hover:text-main-text transition-colors duration-200 ease-in-out"
            >
              Docs
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <Button>Launch App</Button>
          <Burger />
        </div>
      </div>
    </div>
  );
};
