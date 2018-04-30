import React from 'react';
import Grid from '../components/Grid';
import MovesContainer from '../components/MovesContainer'

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
    return (
      <React.Fragment>
        <MovesContainer squaredSize={this.props.squaredSize}/>
        <Grid squaredSize={this.props.squaredSize} cellStates={this.state.cellStates}/>
      </React.Fragment>
    )
  }
}

export default Game;
