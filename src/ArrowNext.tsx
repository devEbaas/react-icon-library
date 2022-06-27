import * as React from "react";

function SvgArrowNext(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.61 12L9.29 6.688a.988.988 0 010-1.398.991.991 0 011.4 0l6.02 6.011a.988.988 0 010 1.398l-6.02 6.011a.99.99 0 01-1.4 0 .988.988 0 010-1.398L14.61 12z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgArrowNext;
