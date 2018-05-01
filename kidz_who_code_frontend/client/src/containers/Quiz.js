import React from 'react';
import Question from '../components/Question';
import ScoreBoard from '../components/ScoreBoard';
import SubmitAnswer from '../components/SubmitAnswer';

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentQuestion: 0,
      currentScore: 0
    }
  }

  componentDidMount(){

  }

  render(){
    return(
      <React.Fragment>
        <h1>Quiz</h1>
        {console.log(this.props)}
        <Question facts={this.props}/>
        <SubmitAnswer handleClick={this.handleSubmit} />
        // Add the three answer options
        <ScoreBoard currentScore={this.state.currentScore} />
      </React.Fragment>
    )
  }
}

export default Quiz;
