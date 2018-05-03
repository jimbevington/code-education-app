import React from 'react';
import Heading from '../components/Heading';
import Arrow from '../components/Arrow';
import Alien from '../components/Alien';
import SpeechBubble from '../components/SpeechBubble';
import Question from '../components/Question';
import ScoreBoard from '../components/ScoreBoard';
import SubmitAnswer from '../components/SubmitAnswer';
import Result from '../components/Result';
import './Quiz.css';

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentQuestion: 0,
      nextButtonVisible: 'submit-answer-button',
      resultVisible: 'result-message-hidden',
      resultText: 'Try again!',
      buttonClass: 'button'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleSubmit(){
    if(this.state.currentQuestion < this.props.facts[1].q_and_a.length){
      this.setState({nextButtonVisible: 'submit-answer-button'});
      this.setState({resultVisible: 'result-message-hidden'});
      this.setState(prevState => ({
        currentQuestion: prevState.currentQuestion + 1,
      }));
    }
  }

  handleButtonClick(){
    this.setState({buttonClass: 'button buttonIncorrect'});
  }

  handleAnswerClick(e){
    if((this.props.facts[1].q_and_a[this.state.currentQuestion].correct_answer === e.target.value) && (this.state.currentQuestion === 4)){
      this.setState({nextButtonVisible: "submit-answer-button"});
      this.setState({resultVisible: 'result-message-hidden-visible'});
      this.setState({resultText: 'Well Done! Full Marks!'});
    } else if ((this.props.facts[1].q_and_a[this.state.currentQuestion].correct_answer === e.target.value)) {
      this.setState({resultText: 'Woo Hoo!'});
      this.setState({resultVisible: 'result-message-hidden-visible'});
      this.setState({nextButtonVisible: "submit-answer-button-visible"});

    } else {
      this.setState({nextButtonVisible: "submit-answer-button"});
      this.setState({resultVisible: 'result-message-visible'});
      this.setState({resultText: 'Try again!'});
      this.handleButtonClick();

      // setState to red border and unclickable
    }
  }

  render(){


    const questionElements = () => {
      return (
        <React.Fragment>
          <Question
            buttonClass={this.state.buttonClass}
            qAndAs={this.props.facts[1].q_and_a}
            currentQuestion={this.state.currentQuestion}
            handleAnswerClick={this.handleAnswerClick}
          />
          <SubmitAnswer
            class={this.state.nextButtonVisible}
            handleClick={this.handleSubmit} />
            <Result
              class={this.state.resultVisible}
              text={this.state.resultText} />
            </React.Fragment>
          )
        }


    return(
      <section id="quiz" className='page'>
        <header>
          <Arrow direction="upArrow" link="#game" />
          <Heading id='quiz-title'text='Quiz' />
        </header>
        <Alien floatStyle="float-none" class='alienpic'/>
        <div style={{alignSelf: 'center'}}>
          <SpeechBubble
            id="quiz-speech-bubble"
            paras={[questionElements()]}
            height='400px'
          />
        </div>
        <Arrow direction="downArrow" link="#bye" />
      </section>
      )
      }
    }

    export default Quiz;
