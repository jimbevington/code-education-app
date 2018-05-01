import React from 'react';

const Question = (props) => {

  const q = props.facts.facts[1].q_and_a.filter(element => element.id === props.currentQuestion);

  return(
    <React.Fragment>
      <h1>currentQuestion is {props.currentQuestion}</h1>

      {console.log('props from Question', props.facts.facts[1].q_and_a[0].id)}

      {/* {let question = props.facts.facts[1].q_and_a.filter(element => element.id === props.currentQuestion)} */}

      {/* <div key={element.id}>
        <li>{element.question}</li>
        <li>{element.correct_answer}</li>
        <li>{element.incorrect_answer_1}</li>
        <li>{element.incorrect_answer_2}</li>
      </div> */}

    </React.Fragment>
  )
}

export default Question;
