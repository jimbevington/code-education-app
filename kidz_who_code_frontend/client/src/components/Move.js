import React from 'react';

const Move = (props) => {
  return (
   <button
    onClick={props.handleClick}
    value={props.moveValue}
    direction={props.direction}
    >
    {props.direction}
  </button>
  )
}

export default Move;
