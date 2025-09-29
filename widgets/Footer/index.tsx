import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-full bg-black mt-20 shadow-[0px_-80px_120px_0px_#10EDED33]">
      <div className="m-[0_auto] flex md:flex-row flex-col max-w-[1300px] px-[10px] w-full py-10 bg-main-bg justify-between md:items-center items-start gap-6">
        <Link href="/">
          <img src="/images/logo.png" alt="logo" width={138} />
        </Link>
        <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-25 gap-10">
          <div className="flex flex-col gap-6">
            <h5 className="text-m font-semibold">Products</h5>
            <ul className="flex flex-col gap-4">
              <li className="text-main-additional-text text-s font-medium hover:text-main-text transition-colors duration-200 ease-in-out">
                <Link href="/">Smart Yields</Link>
              </li>
              <li className="text-main-additional-text text-s font-medium hover:text-main-text transition-colors duration-200 ease-in-out">
                <Link href="/">Trading Arena</Link>
              </li>
              <li className="text-main-additional-text text-s font-medium hover:text-main-text transition-colors duration-200 ease-in-out">
                <Link href="/">Vaults</Link>
              </li>
              <li className="text-main-additional-text text-s font-medium hover:text-main-text transition-colors duration-200 ease-in-out">
                <Link href="/">Perpetual</Link>
              </li>
              <li className="text-main-additional-text text-s font-medium hover:text-main-text transition-colors duration-200 ease-in-out">
                <Link href="/">Duals</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="text-m font-semibold">Resources</h5>
            <ul className="flex flex-col gap-4">
              <li className="text-main-additional-text text-s font-medium hover:text-main-text transition-colors duration-200 ease-in-out">
                <Link href="/">Documentation</Link>
              </li>
              <li className="text-main-additional-text text-s font-medium hover:text-main-text transition-colors duration-200 ease-in-out">
                <span>Audit</span>
              </li>
              <li className="text-main-additional-text text-s font-medium hover:text-main-text transition-colors duration-200 ease-in-out">
                <Link href="/">Brand Kit</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="text-m font-semibold">Community</h5>
            <ul className="flex flex-col gap-4">
              <li className="text-main-additional-text text-s font-medium hover:text-main-text transition-colors duration-200 ease-in-out">
                <Link href="/">Twitter</Link>
              </li>
              <li className="text-main-additional-text text-s font-medium hover:text-main-text transition-colors duration-200 ease-in-out">
                <Link href="/">Discord</Link>
              </li>
              <li className="text-main-additional-text text-s font-medium hover:text-main-text transition-colors duration-200 ease-in-out">
                <Link href="/">Telegram</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="text-m font-semibold">Company</h5>
            <ul className="flex flex-col gap-4">
              <li className="text-main-additional-text text-s font-medium hover:text-main-text transition-colors duration-200 ease-in-out">
                <Link href="/">Blog</Link>
              </li>
              <li className="text-main-additional-text text-s font-medium hover:text-main-text transition-colors duration-200 ease-in-out">
                <Link href="/">Terms of Service</Link>
              </li>
              <li className="text-main-additional-text text-s font-medium hover:text-main-text transition-colors duration-200 ease-in-out">
                <Link href="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
