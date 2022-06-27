import * as React from "react";

function SvgVerified(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.47 5.569l-.234-2.714-2.673.238-1.896-1.926L5.77 3.093l-2.672-.238-.234 2.714L.667 7.13l1.538 2.231-.694 2.631 2.59.705 1.135 2.469 2.43-1.152 2.432 1.152 1.133-2.469 2.591-.705-.694-2.63 1.539-2.232-2.198-1.562zm-2 1.126c.26.26.26.683 0 .943l-2.666 2.667a.667.667 0 01-.943 0L5.529 8.97a.667.667 0 01.942-.942l.862.861L9.53 6.695c.26-.26.682-.26.942 0z"
        fill="#4B94C5"
      />
    </svg>
  );
}

export default SvgVerified;
