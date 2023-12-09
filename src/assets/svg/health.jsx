import React from "react";

const Health = ({ color, width, height }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
  >
    <path d="M19,3 L5,3 C3.9,3 3.01,3.9 3.01,5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 L19,3 Z M18,14 L14,14 L14,18 L10,18 L10,14 L6,14 L6,10 L10,10 L10,6 L14,6 L14,10 L18,10 L18,14 L18,14 Z"></path>
  </svg>
);

export default Health;