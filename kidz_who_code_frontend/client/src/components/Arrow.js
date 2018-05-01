import React from 'react'
import arrow from "./public/big-arrow.svg";
import './Arrow.css';

const Arrow = (props) => {

  const classList = "arrow-link " + props.direction

  return (
    <a href={props.link}>
      <img
        className={classList}
        src={arrow} alt="Down Arrow Link to Next Page"
        width="200" height="200"
      />
    </a>
  )
}

export default Arrow;
