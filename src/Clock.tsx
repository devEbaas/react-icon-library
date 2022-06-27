import * as React from "react";

function SvgClock(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 3a9 9 0 100 18 9 9 0 000-18zm-.536 3.499a.537.537 0 011.072 0l.37 5.18 2.785 1.287a.554.554 0 01-.358 1.043L11 13l.464-6.501z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgClock;
