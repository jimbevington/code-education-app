import React from 'react';
import Question from '../components/Question';
import ScoreBoard from '../components/ScoreBoard';
import SubmitAnswer from '../components/SubmitAnswer';

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentQuestion: null,
      currentScore: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({
      currentQuestion: 0,
      currentScore: 0
    });
  }

  handleSubmit(){
    // get the current question
    // check if answer correct
      // if correct
        // increment 'currentScore'
        this.setState(prevState => ({
          currentQuestion: prevState.currentQuestion + 1,
          currentScore: prevState.currentScore + 1
        }));
        // add/change class on answer text to colour green
        // display 'next question' button
      // if incorrect
        // add/change class on answer text to colour red
        // allow user to select another answer
  }

  render(){
    return(
      <React.Fragment>
        <h1>Quiz</h1>
        {console.log(this.props)}
        <Question facts={this.props}/>
        <SubmitAnswer handleClick={this.handleSubmit} />
        {console.log('currentQuestion', this.state.currentQuestion)}
        {console.log('currentScore', this.state.currentScore)}
        // Add the three answer options
        <ScoreBoard currentScore={this.state.currentScore} />
      </React.Fragment>
    )
  }
}

export default Quiz;
