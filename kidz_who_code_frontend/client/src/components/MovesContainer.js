import React from 'react';
import MovesList from './MovesList';
import MoveBoard from './MoveBoard';
import Go from './Go';
import './MovesContainer.css';

const MovesContainer = (props) => {
  return (
    <section className="moves-container">
      <MovesList
        squaredSize={props.squaredSize}
        handleMoveClick={props.handleMoveListClick}
      />
      <MoveBoard moves={props.moveList} />
      <Go handleClick={props.handleGoClick}/>
    </section>
  )
}

export default MovesContainer;
