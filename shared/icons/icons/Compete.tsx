import * as React from "react";
import type { SVGProps } from "react";
const SvgCompete = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.375 11.25v13.5h4.5v-13.5c0-1.238-.45-2.25-1.8-2.25h-.9c-1.35 0-1.8 1.012-1.8 2.25M19.125 16.875v7.875h4.5v-7.875c0-1.238-.45-2.25-1.8-2.25h-.9c-1.35 0-1.8 1.012-1.8 2.25"
    />
    <path
      fill="#10EDED"
      d="M24.75 24.75H2.25a.85.85 0 0 1-.844-.844.85.85 0 0 1 .844-.843h22.5a.85.85 0 0 1 .844.843.85.85 0 0 1-.844.844"
    />
    <path
      fill="#10EDED"
      d="M10.969 4.5v20.25h5.062V4.5c0-1.237-.506-2.25-2.025-2.25h-1.012c-1.519 0-2.025 1.013-2.025 2.25"
    />
  </svg>
);
export default SvgCompete;
