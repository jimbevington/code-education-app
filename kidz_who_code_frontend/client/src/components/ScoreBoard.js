import React from 'react';

const ScoreBoard = (props) => {
  return(
    <React.Fragment>
      <h2>{props.currentScore} out of 6</h2>
    </React.Fragment>
  )
}

export default ScoreBoard;
