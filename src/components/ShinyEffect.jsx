import React from 'react';

const ShinyEffect = ({ left, right, top, size = 500 }) => { // Changed to destructure props
  const positionStyle = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -1,
    position: 'absolute' // Ensure position is absolute
  };

  if (left !== undefined) {
    positionStyle.left = `${left}px`;
  }

  if (right !== undefined) {
    positionStyle.right = `${right}px`;
  }

  return (
    <div className='shiny-effect' style={positionStyle}></div>
  );
}

export default ShinyEffect;
