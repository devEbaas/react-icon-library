import * as React from "react";

function SvgDimensions(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10 5a1 1 0 011-1h9v9a1 1 0 11-2 0V6h-7a1 1 0 01-1-1zm4 14a1 1 0 01-1 1H4v-9a1 1 0 112 0v7h7a1 1 0 011 1zm-5-3a.997.997 0 00.713-.299l5.989-5.988a1 1 0 10-1.409-1.42l-6 6A1 1 0 009 16z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgDimensions;
