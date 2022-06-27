import * as React from "react";

function SvgCheckWhite(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.471 5.138a.667.667 0 10-.942-.943l-5.554 6.17-2.17-2.17a.667.667 0 00-.943.943l2.667 2.667c.26.26.682.26.942 0l.012-.012.007-.007.012-.014 5.97-6.634z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgCheckWhite;
