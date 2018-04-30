import React from 'react';
import Grid from '../components/Grid';

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
    return <Grid squaredSize={6} cellStates={this.state.cellStates}/>
  }
}

export default Game;
