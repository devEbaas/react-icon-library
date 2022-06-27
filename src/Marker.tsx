import * as React from "react";

function SvgMarker(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.5 21s7.475-5.045 7.475-10.387C19.975 6.67 16.642 3 12.5 3 8.358 3 5 6.67 5 10.613 5 15.954 12.5 21 12.5 21zm0-9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgMarker;
