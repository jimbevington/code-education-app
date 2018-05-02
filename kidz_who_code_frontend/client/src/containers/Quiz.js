import React from 'react';
import Question from '../components/Question';
import ScoreBoard from '../components/ScoreBoard';
import SubmitAnswer from '../components/SubmitAnswer';

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentQuestion: 0

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
  }

  handleSubmit(){
    // get the current question
    // check if answer correct
    // if correct
    // increment 'currentScore'
    if(this.state.currentQuestion < this.props.facts[1].q_and_a.length){
      this.setState(prevState => ({
        currentQuestion: prevState.currentQuestion + 1,
      }));
    }
    // add/change class on answer text to colour green
    // display 'next question' button
    // if incorrect
    // add/change class on answer text to colour red
    // allow user to select another answer
  }

  handleAnswerClick(e){
    // console.log(e.target.value);
    if(this.props.facts[1].q_and_a[this.state.currentQuestion].correct_answer === e.target.value){
      console.log('correct answer');
      // toggle button class to display green
    } else {
      console.log('incorrect answer');
      // toggle button class to display red
    }
  }

  render(){
    return(
      <React.Fragment>
        <h1>Quiz</h1>
        <Question
          qAndAs={this.props.facts[1].q_and_a}
          currentQuestion={this.state.currentQuestion}
          handleAnswerClick={this.handleAnswerClick}
        />
        <SubmitAnswer handleClick={this.handleSubmit} />
        // display ScoreBoard only when all questions have been answered
        {/* <ScoreBoard currentScore={this.state.currentScore} /> */}
      </React.Fragment>
    )
  }
}

export default Quiz;
