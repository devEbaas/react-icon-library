import * as React from "react";

function SvgRadioButton(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16 25.333a9.333 9.333 0 100-18.666 9.333 9.333 0 000 18.666zm0 1.334c5.89 0 10.666-4.776 10.666-10.667S21.891 5.333 16 5.333 5.333 10.11 5.333 16 10.109 26.667 16 26.667z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgRadioButton;
