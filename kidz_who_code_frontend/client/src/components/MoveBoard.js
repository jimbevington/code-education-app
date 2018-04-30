import React from 'react';

const MoveBoard = (props) => {
  const moves = props.moves.forEach((move, index) => {
    return <li>{index}: {move}</li>
  });

  return (
    <ul>
      {moves}
    </ul>
  )
}

export default MoveBoard;
