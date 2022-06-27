import * as React from "react";

function SvgCloseCircle(props: React.SVGProps<SVGSVGElement>) {
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
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM7.757 7.757a1 1 0 011.415 0L12 10.586l2.828-2.829a1 1 0 111.415 1.415L13.414 12l2.9 2.9a1 1 0 11-1.415 1.413L12 13.414l-2.828 2.829a1 1 0 11-1.415-1.415L10.586 12 7.757 9.172a1 1 0 010-1.415z"
        fill="#CE4242"
      />
    </svg>
  );
}

export default SvgCloseCircle;
