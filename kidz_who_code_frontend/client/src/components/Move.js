import React from 'react';
import arrow from './public/left-arrow.svg';
import './Move.css';

const Move = (props) => {

  const moveClasses = "arrow " + props.direction;

  return (
    <img className={moveClasses} src={arrow} alt={props.direction}/>

  )
}

export default Move;
