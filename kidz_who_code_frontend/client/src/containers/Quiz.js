import React from 'react';
import Question from '../components/Question';
import ScoreBoard from '../components/ScoreBoard';
import SubmitAnswer from '../components/SubmitAnswer';

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentQuestion: 0,
      nextButtonVisible: 'submit-answer-button',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
  }

  handleSubmit(){
    if(this.state.currentQuestion < this.props.facts[1].q_and_a.length){
      this.setState({nextButtonVisible: 'submit-answer-button'});
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
    if((this.props.facts[1].q_and_a[this.state.currentQuestion].correct_answer === e.target.value)){
      this.setState({nextButtonVisible: "submit-answer-button-visible"});
      console.log('correct answer');
      console.log(this.state.currentQuestion);
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
        <SubmitAnswer
          class={this.state.nextButtonVisible} handleClick={this.handleSubmit} />
          {/* // display ScoreBoard only when all questions have been answered */}
          {/* <ScoreBoard currentScore={this.state.currentScore} /> */}
        </React.Fragment>
      )
    }
  }

  export default Quiz;
