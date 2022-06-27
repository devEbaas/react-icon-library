import * as React from "react";

function SvgCheck(props: React.SVGProps<SVGSVGElement>) {
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
        d="M18.707 7.707a1 1 0 00-1.414-1.414l-8.33 9.255-3.256-3.255a1 1 0 00-1.414 1.414l4 4a1 1 0 001.432-.018l.01-.01a.857.857 0 00.018-.021l8.954-9.95z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgCheck;
