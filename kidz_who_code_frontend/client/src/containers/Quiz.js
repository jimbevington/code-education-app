import React from 'react';
import Question from '../components/Question';
import ScoreBoard from '../components/ScoreBoard';
import SubmitAnswer from '../components/SubmitAnswer';
import Arrow from '../components/Arrow';
import './Quiz.css';

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentQuestion: 0,
      currentScore: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    // get the current question
    // check if answer correct
    // if correct
    // increment 'currentScore'
    if(this.state.currentQuestion < this.props.facts[1].q_and_a.length){
      this.setState(prevState => ({
        currentQuestion: prevState.currentQuestion + 1,
        currentScore: prevState.currentScore + 1
      }));
    }
    // add/change class on answer text to colour green
    // display 'next question' button
    // if incorrect
    // add/change class on answer text to colour red
    // allow user to select another answer
  }

  render(){
    return(
      <section id="quiz" className="page">
        <Arrow direction="upArrow" link="Game" />
        <h1>Quiz</h1>
        <Question
          qAndAs={this.props.facts[1].q_and_a}
          currentQuestion={this.state.currentQuestion}
        />
        <SubmitAnswer handleClick={this.handleSubmit} />

        <Arrow direction="downArrow" link="Bye" />
      </section>
    )
  }
}

export default Quiz;
