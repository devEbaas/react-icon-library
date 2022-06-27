import * as React from "react";

function SvgAngleDown(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 14.61l5.312-5.32a.988.988 0 011.398 0 .99.99 0 010 1.4l-6.01 6.02a.988.988 0 01-1.398 0L5.29 10.69a.991.991 0 010-1.4.988.988 0 011.398 0L12 14.61z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgAngleDown;
