import * as React from "react";

function SvgBreadcrumbArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.74 8.5L6.193 4.958a.658.658 0 11.934-.932l4.013 4.008a.659.659 0 010 .932l-4.013 4.008a.66.66 0 01-.934-.933L9.74 8.5z"
        fill="#879DAC"
      />
    </svg>
  );
}

export default SvgBreadcrumbArrow;
