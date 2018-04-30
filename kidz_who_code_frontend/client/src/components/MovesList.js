import React from 'react';
import Move from './Move';
import './MovesList.css';

const MovesList = (props) => {

  return (
    <div className="moves-list">
      <Move
        direction="up"
        moveValue={props.squaredSize * -1}
        handleClick={props.handleMoveClick}
      />
      <Move
        direction="down"
        moveValue={props.squaredSize}
        handleClick={props.handleMoveClick}
      />
      <Move
        direction="left"
        moveValue={-1}
        handleClick={props.handleMoveClick}
      />
      <Move
        direction="right"
        moveValue={1}
        handleClick={props.handleMoveClick}
      />
    </div>
  )
}

export default MovesList;
