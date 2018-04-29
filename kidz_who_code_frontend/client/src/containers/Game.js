import React from 'react';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isWon: false,
      cellStates: [],
      goalPosition: null,
      playerPosition: null
    }
  }

  render(){
    return <h1>This is the Game</h1>
  }
}

export default Game;
