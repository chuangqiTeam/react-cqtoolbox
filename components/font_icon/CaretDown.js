import React from 'react';

const CaretDown = ({color}) => (
  <svg
    style={{
      color: color,
      fill: color,
      display: 'block',
      height: 24,
      width: 24,
    }}
    viewBox="0 0 24 24">
    <path d="M7 10l5 5 5-5z"></path>
  </svg>
);


export {CaretDown};
