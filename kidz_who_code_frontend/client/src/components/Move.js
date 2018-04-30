import React from 'react';
import arrow from './public/left-arrow.svg';
import './Move.css';

const Move = (props) => {

  const moveClasses = "arrow " + props.direction;

  return (
    <img
      className={moveClasses}
      src={arrow}
      direction={props.direction}
      alt={props.direction}
      onClick={props.handleClick}
      value={props.moveValue}
    />
  )
}

export default Move;
