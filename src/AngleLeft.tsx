import * as React from "react";

function SvgAngleLeft(props: React.SVGProps<SVGSVGElement>) {
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
        d="M9.39 12l5.32 5.312a.987.987 0 010 1.398.99.99 0 01-1.4 0L7.29 12.7a.988.988 0 010-1.398l6.02-6.011a.99.99 0 011.4 0 .987.987 0 010 1.398L9.39 12z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgAngleLeft;
