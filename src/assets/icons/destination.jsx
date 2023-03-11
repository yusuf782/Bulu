import React from "react";

function destinationIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      fill="none"
      viewBox="0 0 21 21"
      {...props}
    >
      <circle cx="10.271" cy="10.72" r="10" fill="#1AA638"></circle>
      <path
        fill="#fff"
        d="M8.878 9.652c-.343.35-.676.707-1.032 1.04-.162.156-.355.278-.565.359-.517.177-1.085-.058-1.368-.522a1.2 1.2 0 01.168-1.472c.668-.677 1.343-1.347 2.015-2.02.383-.384.767-.771 1.155-1.155.525-.517 1.24-.522 1.762-.006a855.196 855.196 0 013.148 3.148c.49.492.497 1.248.026 1.724-.47.476-1.226.48-1.732-.024-.357-.353-.704-.715-1.055-1.073l-.055.016V15.647c0 .41-.102.771-.425 1.04-.365.304-.781.384-1.225.205-.443-.178-.697-.51-.753-.986a2.779 2.779 0 01-.013-.322V9.679l-.05-.027z"
      ></path>
    </svg>
  );
}

export default destinationIcon;