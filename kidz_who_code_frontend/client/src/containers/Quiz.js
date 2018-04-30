import React from 'react';
import Question from '../components/Question';

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentQuestion: null
    }
  }

  render(){
    return(
      <React.Fragment>
        <h1>Quiz</h1>
        <Question facts={this.props}/>
        {/* <ul>
          {this.props.facts[1].q_and_a.map(element =>
          <div key={element.id}>
          <li>{element.question}</li>
          <li>{element.correct_answer}</li>
          <li>{element.incorrect_answer_1}</li>
          <li>{element.incorrect_answer_2}</li>
        </div>
      )}
    </ul> */}
  </React.Fragment>
)
}
}

export default Quiz;
