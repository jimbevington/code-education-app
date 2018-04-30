import React from 'react';

class Quiz extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
        <h1>Quiz</h1>
        <ul>
          {this.props.facts[1].q_and_a.map(element =>
            <div key={element.id}>
              <li>{element.question}</li>
              <li>{element.correct_answer}</li>
              <li>{element.incorrect_answer_1}</li>
              <li>{element.incorrect_answer_2}</li>
            </div>
          )}
        </ul>
      </React.Fragment>
    )
  }
}

export default Quiz;
