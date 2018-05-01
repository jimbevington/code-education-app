import React from 'react';
import Move from './Move';
import './MoveBoard.css';

const MoveBoard = (props) => {
  const moves = props.moves.map((move, index) => {
    return <Move key={index} direction={move} />
  });

  return (
    <ul className='move-board'>
      {moves}
    </ul>
  )
}

export default MoveBoard;
