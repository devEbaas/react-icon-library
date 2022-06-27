import * as React from "react";

function SvgHidden(props: React.SVGProps<SVGSVGElement>) {
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
        d="M18.733 6.68a1 1 0 10-1.47-1.357L5.267 18.32a1 1 0 101.471 1.355L18.733 6.681zM11.994 6a6.67 6.67 0 011.717.232l-2.714 2.94a3.007 3.007 0 00-1.896 2.054l-3.476 3.766C4.003 13.494 3 12 3 12s4.027-6 8.994-6zm6.876 3.489l-7.795 8.444c.302.044.609.067.918.067C16.962 18 21 12 21 12s-.802-1.19-2.13-2.511z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgHidden;
