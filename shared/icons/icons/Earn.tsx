import * as React from "react";
import type { SVGProps } from "react";
const SvgEarn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    viewBox="0 0 27 27"
    {...props}
  >
    <path
      fill="#0B6D6C"
      d="M24.75 9.563a7.31 7.31 0 0 1-7.898 7.29 7.32 7.32 0 0 0-6.704-6.706 7.312 7.312 0 1 1 14.603-.585"
    />
    <path
      fill="#10EDED"
      d="M9.563 10.125a7.322 7.322 0 0 1 7.313 7.313 7.312 7.312 0 1 1-7.313-7.313m-.99 6.322-1.823.99 1.822.99.99 1.823.99-1.822 1.823-.99-1.822-.99-.99-1.823z"
    />
  </svg>
);
export default SvgEarn;
