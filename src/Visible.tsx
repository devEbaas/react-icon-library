import * as React from "react";

function SvgVisible(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 18c4.97 0 9.012-6 9.012-6S16.971 6 12 6c-4.97 0-9 6-9 6s4.03 6 9 6zm0-3a3 3 0 100-6 3 3 0 000 6z"
        fill="#879DAC"
      />
    </svg>
  );
}

export default SvgVisible;
