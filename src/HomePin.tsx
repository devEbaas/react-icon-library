import * as React from "react";

function SvgHomePin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.221 7.003A1.667 1.667 0 002.5 8.376v7.457c0 .92.746 1.667 1.667 1.667h11.666c.92 0 1.667-.746 1.667-1.667V8.376c0-.549-.27-1.062-.721-1.373L10.473 2.66a.833.833 0 00-.946 0L3.221 7.003zm5.112 3.83a.833.833 0 00-.833.834v2.5c0 .46.373.833.833.833h3.334c.46 0 .833-.373.833-.833v-2.5a.833.833 0 00-.833-.834H8.333z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgHomePin;