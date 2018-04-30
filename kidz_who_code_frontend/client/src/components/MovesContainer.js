import React from 'react';
import Move from './Move';

const MovesContainer = (props) => {

  return (
    <React.Fragment>
      <Move direction="up" moveValue={props.squaredSize * -1}/>
      <Move direction="down" moveValue={props.squaredSize}/>
      <Move direction="left" moveValue={1}/>
      <Move direction="right" moveValue={-1}/>
    </React.Fragment>
  )
}

export default MovesContainer;
