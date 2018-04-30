import React from 'react';
import Grid from '../components/Grid';
import MovesContainer from '../components/MovesContainer'
import MoveBoard from '../components/MoveBoard';
import Go from '../components/Go';

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
    this.handleMove = this.handleMove.bind(this);
  }

  componentDidMount(){
    // generate a random player position
    const playerStart = this.generatePlayerStartPos();
    debugger;
    // generate a random goal position
    // make updated cellStates
    // setState of cellStates

  }

  generatePlayerStartPos = () => {
    return Math.floor((Math.random() * this.props.squaredSize ** 2));
  }

  handleMove(){
    return <p>Move Handled</p>
  }

  render(){
    return (
      <React.Fragment>
        <MovesContainer squaredSize={this.props.squaredSize}/>
        <Grid squaredSize={this.props.squaredSize} cellStates={this.state.cellStates}/>
        <MoveBoard moves={this.state.moveList}/>
        <Go handleClick={this.handleMove}/>
      </React.Fragment>
    )
  }
}

export default Game;
