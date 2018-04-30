import React from 'react';
import Move from './Move';

const MovesContainer = (props) => {

  return (
    <div className="moves-container">
      <Move direction="up" moveValue={props.squaredSize * -1}/>
      <Move direction="down" moveValue={props.squaredSize}/>
      <Move direction="left" moveValue={1}/>
      <Move direction="right" moveValue={-1}/>
    </div>
  )
}

export default MovesContainer;
