import * as React from "react";

function SvgHeart(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20 9.938C20 14.116 12 19 12 19s-8-4.863-8-9.063C4 6.764 5.79 5 8 5s4 2.625 4 2.625S13.79 5 16 5s4 1.763 4 4.938z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgHeart;
