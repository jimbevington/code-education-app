import React from 'react';
import Grid from '../components/Grid';
import MovesContainer from '../components/MovesContainer'
import MoveBoard from '../components/MoveBoard';
import Go from '../components/Go';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gridSize: (this.props.squaredSize ** 2) - 1,
      isWon: false,
      cellStates: [],
      goalPosition: null,
      playerPosition: null,
      moveList: [],
      moveDirList: []
    }
    this.handleMove = this.handleMove.bind(this);
    this.addMove = this.addMove.bind(this);
  }

  componentDidMount(){
    // generate a random player position
    const playerStart = this.generateGridPos();
    // generate a random goal position
    const goalStart = this.generateGoalPosition(playerStart);

    // put Player and goal into cellStates
    let updatedCellStates = this.state.cellStates;
    updatedCellStates[playerStart] = 'player';
    updatedCellStates[goalStart] = 'goal';

    // update the State
    this.setState({playerPosition: playerStart,
                   goalPosition: goalStart,
                   cellStates: updatedCellStates
                 }, console.log(this.state.cellStates));
  }

  generateGridPos = () => {
    return Math.floor((Math.random() * this.state.gridSize));
  }

  generateGoalPosition = (posToAvoid) => {
    // const goalPos = generateGridPos();
    // make this more sophisticated LATER
    let goalPos = posToAvoid + (this.props.squaredSize * 1.5);
    if (goalPos > this.state.gridSize){
      goalPos -= this.state.gridSize;
    }
    return goalPos;
  }

  addMove(event){
    event.preventDefault();
    const updatedMoves = this.state.moveList;
    updatedMoves.push(event.target.value);
    const updatedDirMoves = this.state.moveDirList;
    updatedDirMoves.push(event.target.getAttribute('direction'));
    this.setState({moveList: updatedMoves, moveDirList: updatedDirMoves});
  }

  handleMove(){
    return <p>Move Handled</p>
  }

  render(){
    return (
      <React.Fragment>
        <MovesContainer
          squaredSize={this.props.squaredSize}
          handleMoveClick={this.addMove}
        />
        <Grid squaredSize={this.props.squaredSize} cellStates={this.state.cellStates}/>
        <MoveBoard moves={this.state.moveDirList} />
        <Go handleClick={this.handleMove}/>
      </React.Fragment>
    )
  }
}

export default Game;
