import * as React from "react";

function SvgClose(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.722 6.295a1.008 1.008 0 10-1.427 1.427L10.574 12l-4.279 4.279a1.008 1.008 0 101.427 1.426L12 13.426l4.279 4.279a1.008 1.008 0 101.426-1.426L13.426 12l4.279-4.278a1.008 1.008 0 10-1.426-1.427L12 10.574 7.722 6.295z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgClose;
