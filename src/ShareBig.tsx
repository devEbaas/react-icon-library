import * as React from "react";

function SvgShareBig(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.667 2.667a2 2 0 01-3.969.357V3.02a2 2 0 113.969-.354zm-3.911 1.86a2.664 2.664 0 01-.662-1.158L5.244 6.14c.31.32.542.715.662 1.158l4.85-2.771zm-5.454 3.83a2.013 2.013 0 000-.714A1.998 1.998 0 003.333 6a2 2 0 101.969 2.357zM5.244 9.86c.31-.319.542-.715.662-1.157l4.85 2.77c-.31.32-.542.716-.662 1.158L5.244 9.86zm5.423 3.473a1.998 1.998 0 012-2 2 2 0 11-2 2z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgShareBig;
