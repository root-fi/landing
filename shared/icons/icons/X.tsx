import * as React from "react";
import type { SVGProps } from "react";
const SvgX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M22.901 5h3.68l-8.04 9.19L28 26.693h-7.406l-5.8-7.584-6.638 7.584H4.474l8.6-9.83L4 5h7.594l5.243 6.932zM21.61 24.491h2.039L10.486 7.087H8.298z"
    />
  </svg>
);
export default SvgX;
