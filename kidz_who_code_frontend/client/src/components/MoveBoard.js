import React from 'react';
import Move from './Move';
import Go from './Go';
import './MoveBoard.css';

const MoveBoard = (props) => {
  const moves = props.moves.map((move, index) => {
    return <Move key={index} direction={move} />
  });

  return (
    <article className='move-board'>
      <ul >
        {moves}
      </ul>
      <Go handleClick={props.handleGoFromMoveBoard}/>
    </article>
  )
}

export default MoveBoard;
