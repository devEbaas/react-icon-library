import * as React from "react";

function SvgTour360(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10 5a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM7 7a2 2 0 00-2 2v5.711c.916.516 2.398.92 4.184 1.13a4 4 0 115.632 0c1.786-.21 3.268-.614 4.184-1.13V9a2 2 0 00-2-2H7z"
        fill="#fff"
      />
      <path
        d="M14 13a2 2 0 11-4 0 2 2 0 014 0zm-3 3.982V16l2 2-2 2v-1.02C5.394 18.75 1 16.608 1 14c0-1.329 1.14-2.536 3-3.432v2.056c-.64.412-1 .88-1 1.376 0 1.544 3.5 2.816 8 2.982zM23 14c0 2.437-3.834 4.466-8.91 4.91L15 18l-1.07-1.07C17.975 16.637 21 15.437 21 14c0-.496-.36-.964-1-1.376v-2.056c1.86.896 3 2.103 3 3.432z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgTour360;
