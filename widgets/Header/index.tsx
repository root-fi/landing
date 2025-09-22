import { Button } from "@/shared/ui/Button";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="m-[0_auto] flex items-center justify-between max-w-[1300px] px-[10px] w-full h-[65px] bg-main-bg border-b border-[1px] [border-image-source:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)] [border-image-slice:1]">
      <img src="/images/logo.png" alt="logo" width="138px" />
      <ul className="flex gap-20">
        <li>
          <Link href="/" className="text-m font-semibold hover:underline">
            Products
          </Link>
        </li>
        <li>
          <Link href="/" className="text-m font-semibold hover:underline">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/" className="text-m font-semibold hover:underline">
            Docs
          </Link>
        </li>
      </ul>
      <Button>Launch App</Button>
    </div>
  );
};
