import { m } from "framer-motion"

import React from "react";

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
        height="100%"
      fill="none"
      viewBox="0 0 198 200"
    >
      {/* <path fill="#E5E5E5" d="M0 0H198V200H0z"></path> */}
      <g>
        <rect width="160" height="160" x="19" y="20" fill="#000" rx="80"></rect>
        <g stroke="#fff" strokeLinecap="round" strokeWidth="5">
          <path d="M69.802 129.906l60.104-60.105"></path>
          <path d="M129.552 129.552L69.448 69.448"></path>
        </g>
      </g>
    </svg>
  );
}

export default CloseIcon;