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
    const playerStart = this.generateGridPos();
    this.setState({playerPosition: playerStart});
    // generate a random goal position
    const goalStart = this.generateGoalPosition(playerStart);
    console.log(playerStart, goalStart);
    // make updated cellStates
    // setState of cellStates

  }

  generateGridPos = () => {
    return Math.floor((Math.random() * this.props.squaredSize ** 2));
  }

  generateGoalPosition = (posToAvoid) => {
    // const goalPos = generateGridPos();
    // make this more sophisticated LATER
    let goalPos = posToAvoid + (this.props.squaredSize * 1.5);
    if (goalPos > this.props.squaredSize ** 2){
      goalPos -= (this.props.squaredSize ** 2);
    }
    return goalPos;
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
