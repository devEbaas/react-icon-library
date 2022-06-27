import * as React from "react";

function SvgArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.391 13l4.319 4.312a.987.987 0 010 1.398.99.99 0 01-1.4 0L5.29 12.7a.988.988 0 010-1.398l6.02-6.011a.99.99 0 011.4 0 .987.987 0 010 1.398L8.391 11H18a1 1 0 110 2H8.391z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgArrowLeft;
