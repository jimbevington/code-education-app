import React from 'react';
import './Cell.css';

const Cell = (props) => {
  return (
    <div className='cell'>{props.id}</div>
  )
}

export default Cell;
