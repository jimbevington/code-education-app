import React from 'react';

const Question = (props) => {
  return(
    <React.Fragment>
      <ul>
        {props.facts.facts[1].q_and_a.map(element =>
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

export default Question;
