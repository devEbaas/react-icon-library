import * as React from "react";

function SvgArrowRight(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.609 11L12.29 6.688a.987.987 0 010-1.398.99.99 0 011.4 0l6.02 6.011a.988.988 0 010 1.398l-6.02 6.011a.99.99 0 01-1.4 0 .987.987 0 010-1.398L16.609 13H6a1 1 0 110-2h10.609z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgArrowRight;
