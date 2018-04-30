import React from 'react';
import Grid from '../components/Grid';
import MovesContainer from '../components/MovesContainer'
import Go from '../components/Go';
import Heading from '../components/Heading';
import InfoBox from '../components/InfoBox';

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
                 });
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
    // stop here if game is won
    if(this.state.isWon){
      return;
    }

    const updatedMoves = this.state.moveList;
    updatedMoves.push(event.target.getAttribute('value'));
    const updatedDirMoves = this.state.moveDirList;
    updatedDirMoves.push(event.target.getAttribute('direction'));
    this.setState({moveList: updatedMoves, moveDirList: updatedDirMoves});
  }

  handleMove(){
    // skip if no Moves
    if(!this.state.moveList.length){
      return;
    }

    let updatedCellState = this.state.cellStates;
    let currentPosition = this.state.playerPosition;

    // clear Player position
    updatedCellState[currentPosition] = null;

    const updatedPlayerPosition = this.evaluateMoves(currentPosition);

    updatedCellState[updatedPlayerPosition] = 'player';

    // update State: playerPosition, cellStates, moveList, moveDirlist
    this.setState({cellStates: updatedCellState,
                   playerPosition: updatedPlayerPosition,
                   moveList: [],
                   moveDirList: []
                 }, this.checkWon);
  }

  evaluateMoves(playerPosition){
    // have a new pos var
    let updatedPos = playerPosition;

    // loop through all the moves
    for (let move of this.state.moveList){
      const intMove = parseInt(move, 10);
      // set controls based on
      const atLeftBoundary = updatedPos % this.props.squaredSize === 0;
      const atRightBoundary = (updatedPos + 1) % this.props.squaredSize === 0;
      // debugger;
      // skip move if Player can't move LEFT
      if(atLeftBoundary && intMove === -1){
        continue;
      }
      // skip move if Player can't move RIGHT
      if(atRightBoundary && intMove === 1){
        continue;
      }
      // calculate what the new Position will be
      const newPos = updatedPos + intMove;
      // update the Position if in range of the board
      if(newPos < this.state.gridSize && newPos >= 0){
        updatedPos = newPos;
      }
    }

    return updatedPos;
  }

  checkWon(){
    if (this.state.playerPosition === this.state.goalPosition){
      this.setState({isWon: true}, this.declareWinner);
    }
  }

  declareWinner(){
    console.log('you won!');
  }

  render(){
    return (
      <React.Fragment>
        <Heading text="Take Divvy Home!" />
        <InfoBox text="Here are some instructions." />
        <Grid
          squaredSize={this.props.squaredSize} cellStates={this.state.cellStates}
        />
        <MovesContainer
          squaredSize={this.props.squaredSize}
          handleMoveListClick={this.addMove}
          moveList={this.state.moveDirList}
        />
        {/* <MovesList
          squaredSize={this.props.squaredSize}
          handleMoveClick={this.addMove}
        />
        <MoveBoard moves={this.state.moveDirList} /> */}
        <Go handleClick={this.handleMove}/>
      </React.Fragment>
    )
  }
}

export default Game;
