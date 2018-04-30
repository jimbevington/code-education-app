import React from 'react';

const Move = (props) => {
  return (
   <button
    onClick={props.handleClick}
    value={props.moveValue}
    >
    {props.direction}
  </button>
  )
}

export default Move;
