import React from 'react';

const Move = (props) => {
  return <button onClick={props.handleClick}>{props.direction}</button>
}

export default Move;
