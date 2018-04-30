import React from 'react';
import './MoveBoard.css';

const MoveBoard = (props) => {
  const moves = props.moves.map((move, index) => {
    return <li key={index}>{move}</li>
  });

  return (
    <ul className='move-board'>
      {moves}
    </ul>
  )
}

export default MoveBoard;
