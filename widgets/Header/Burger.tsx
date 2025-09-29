import { BaseIcon } from "@/shared/ui/BaseIcon";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const links = [
  { title: "Products", href: "/#products" },
  { title: "Blog", href: "/blog" },
  { title: "Docs", href: "https://docs.rootfi.org/" },
];

export default function Burger() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((s) => !s);

  const overlayStyle: React.CSSProperties = {
    background: `#000000`,
    transition: `transform 1s ease, opacity 1s ease`,
    transform: open ? "scale(1)" : "scale(0.01)",
    opacity: open ? 1 : 0,
  };

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="relative">
      <div
        aria-hidden={!open}
        className="fixed inset-0 h-[100vh] pointer-events-none z-[-1] flex items-center justify-center"
        style={{ overflow: "hidden" }}
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "200vmax",
            height: "200vmax",
            transformOrigin: "top right",
            ...overlayStyle,
            borderRadius: "50%",
            pointerEvents: open ? "auto" : "none",
            boxShadow: open
              ? "0 30px 80px rgba(0,0,0,0.25)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
        />
      </div>

      <BaseIcon
        icon={open ? "Close" : "Menu"}
        tabIndex={0}
        role="button"
        onClick={toggle}
        className="w-10 h-10 rounded-[10px] bg-main-fields"
      />

      <div
        className="fixed flex w-full h-[100vh] inset-0 z-1 pt-[120px] items-start justify-start pointer-events-none"
        style={{
          transition: `opacity 0.5s ease`,
          opacity: open ? 1 : 0,
          transitionDelay: open ? `0.5s` : "0s",
        }}
      >
        <nav
          className="pointer-events-auto text-center drop-shadow-2xl px-6"
          aria-hidden={!open}
        >
          <ul className="gap-10 flex flex-col items-start">
            {links.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-white text-xxl  hover:text-main-text transition-colors duration-200 ease-in-out"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute w-full bottom-10 justify-center items-center flex gap-10">
          <Link href="/">
            <BaseIcon
              icon="X"
              className="w-10 h-10 rounded-full bg-main-fields"
            />
          </Link>
          <Link href="/">
            <BaseIcon
              icon="Discord"
              className="w-10 h-10 rounded-full bg-main-fields"
            />
          </Link>
          <Link href="/">
            <BaseIcon
              icon="Telegram"
              className="w-10 h-10 rounded-full bg-main-fields"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
