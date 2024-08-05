import * as React from "react"
const HamburgerIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={props.width || 32}
    height={props.height || 32}
    style={{
      fill: props.color || "white",
      enableBackground: "new 0 0 32 32",
    }}
    {...props}
  >
    <path d="M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z" />
  </svg>
)
export default HamburgerIcon