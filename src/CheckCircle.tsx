import * as React from "react";

function SvgCheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM6.343 13.414A1 1 0 117.757 12l2.829 2.828 6.364-6.364a1 1 0 011.414 1.415l-7.071 7.07a1 1 0 01-1.414 0l-3.536-3.535z"
        fill="#20A483"
      />
    </svg>
  );
}

export default SvgCheckCircle;
