import * as React from "react";

function SvgDoneCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28 16c0 6.628-5.372 12-12 12-6.627 0-12-5.372-12-12C4 9.373 9.373 4 16 4c6.628 0 12 5.373 12 12zM8.458 17.886A1.333 1.333 0 0110.343 16l3.771 3.771 8.486-8.485a1.333 1.333 0 011.885 1.886L15.057 22.6c-.52.52-1.365.52-1.885 0l-4.714-4.714z"
        fill="#20A483"
      />
    </svg>
  );
}

export default SvgDoneCircle;
