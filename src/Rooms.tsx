import * as React from "react";

function SvgRooms(props: React.SVGProps<SVGSVGElement>) {
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
        d="M5 6a2 2 0 00-2 2v4a1 1 0 001 1h1v-1a1 1 0 011-1h4a1 1 0 011 1v1h2v-1a1 1 0 011-1h4a1 1 0 011 1v1h1a1 1 0 001-1V8a2 2 0 00-2-2H5zm-4 9a1 1 0 011-1h20a1 1 0 011 1v4a1 1 0 01-1 1h-.535c.34.588.535 1.271.535 2h-2a2 2 0 00-2-2H6a2 2 0 00-2 2H2c0-.729.195-1.412.535-2H2a1 1 0 01-1-1v-4z"
        fill="#191F23"
      />
    </svg>
  );
}

export default SvgRooms;
