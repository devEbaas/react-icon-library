import * as React from "react";

function SvgEstimateMapHover(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.97 5.069l-.235-2.714-2.672.238L8.166.667 6.27 2.593l-2.672-.238-.234 2.714L1.167 6.63l1.538 2.231-.694 2.631 2.59.705 1.134 2.469 2.431-1.152 2.432 1.152 1.133-2.469 2.591-.705-.694-2.63 1.538-2.232-2.197-1.562zm-2 1.126c.26.26.26.683 0 .943L8.305 9.805a.667.667 0 01-.943 0L6.028 8.47a.667.667 0 11.943-.942l.862.861 2.195-2.195c.26-.26.683-.26.943 0z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgEstimateMapHover;
