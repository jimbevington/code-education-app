import React from 'react';
import Move from './Move';
import './MoveBoard.css';

const MoveBoard = (props) => {
  const moves = props.moves.map((move, index) => {
    return <Move key={index} direction={move} />
    // return <li key={index}>{move}</li>
  });

  return (
    <ul className='move-board'>
      {moves}
    </ul>
  )
}

export default MoveBoard;
