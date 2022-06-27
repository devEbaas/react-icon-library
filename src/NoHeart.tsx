import * as React from "react";

function SvgNoHeart(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10.62 7.13A8.354 8.354 0 0112 8.626s.535-.784 1.38-1.494C14.082 6.54 14.998 6 16 6c2.21 0 4 1.763 4 4.938 0 4.2-8 9.062-8 9.062s-8-4.863-8-9.063C4 7.764 5.79 6 8 6c1.002 0 1.918.54 2.62 1.13zM12 17.75s5.717-3.922 6.025-6.75c.146-1.335-.35-2.988-2.025-3-1.988-.015-4 3.524-4 3.524S9.988 7.984 8 8c-1.675.012-2.17 1.665-2.025 3C6.283 13.828 12 17.75 12 17.75z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgNoHeart;
