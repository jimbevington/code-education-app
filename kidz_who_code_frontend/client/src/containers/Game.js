import React from 'react';
import Grid from '../components/Grid';
import MovesContainer from '../components/MovesContainer'
import MoveBoard from '../components/MoveBoard';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isWon: false,
      cellStates: [],
      goalPosition: null,
      playerPosition: null,
      moveList: []
    }
  }

  render(){
    return (
      <React.Fragment>
        <MovesContainer squaredSize={this.props.squaredSize}/>
        <Grid squaredSize={this.props.squaredSize} cellStates={this.state.cellStates}/>
        <MoveBoard moves={this.state.moveList}/>
      </React.Fragment>
    )
  }
}

export default Game;
