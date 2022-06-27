import * as React from "react";

function SvgHomeThanks(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 176 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#98CBC0" d="M112 88H48v64h64z" />
      <path fill="#FF774A" d="M176 88h-64v64h64z" />
      <path d="M112 88H48l64-64v64z" fill="#6B5757" />
      <path
        d="M80 104a16.001 16.001 0 0116 16H80v-16zm-16 16a16.001 16.001 0 0116-16v16H64zm0 0v32h32v-32H64z"
        fill="#FFF3DE"
      />
      <path
        d="M176 88a63.992 63.992 0 00-39.508-59.128A64 64 0 00112 24v64h64z"
        fill="#FF774A"
      />
      <path
        d="M163.2 139.2v-12.8h-12.8v-12.8h-12.8v-12.8h-12.8V88H112v64h64v-12.8h-12.8z"
        fill="#EDF6FC"
      />
      <circle cx={24} cy={24} r={24} fill="#FFA600" />
    </svg>
  );
}

export default SvgHomeThanks;
