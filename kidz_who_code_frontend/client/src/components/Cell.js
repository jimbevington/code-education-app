import React from 'react';
import './Cell.css';
import Player from './Player';
import Goal from './Goal';

const Cell = (props) => {
  let contents;
  if (props.value === 'player'){
    contents = <Player />
  } else if (props.value === 'goal'){
    contents = <Goal />
  }

  return <div className='cell'>{contents}</div>

}

export default Cell;
