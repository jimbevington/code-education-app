import React from 'react';
import Question from '../components/Question';
import ScoreBoard from '../components/ScoreBoard';

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentQuestion: null,
      currentScore: 0
    }
  }

  render(){
    return(
      <React.Fragment>
        <h1>Quiz</h1>
        <Question facts={this.props}/>
        <ScoreBoard currentScore={this.state.currentScore} />
      </React.Fragment>
    )
  }
}

export default Quiz;
