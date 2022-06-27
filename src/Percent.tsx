import * as React from "react";

function SvgPercent(props: React.SVGProps<SVGSVGElement>) {
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
        d="M18.353 3.533l.351 4.07L22 9.946l-2.308 3.347 1.041 3.947-3.886 1.057-1.7 3.703-3.647-1.727L7.853 22l-1.7-3.703-3.887-1.057 1.042-3.947L1 9.946l3.296-2.343.35-4.07 4.009.356L11.5 1l2.845 2.889 4.008-.356zM9 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.203-7.29a1 1 0 10-1.41-1.418l-6 6a1 1 0 101.418 1.41l5.992-5.991z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgPercent;
