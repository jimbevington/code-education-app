import React from 'react';

const Question = (props) => {

  const questionData = props.qAndAs[props.currentQuestion];

  const question = questionData.question;
  const correctAnswer = questionData.correct_answer;
  const incorrectAnswer1 = questionData.incorrect_answer_1;
  const incorrectAnswer2 = questionData.incorrect_answer_2;
  // debugger;


  return(
    <React.Fragment>
      <h2>Q{questionData.id}. {question}</h2>
      <h2> - {correctAnswer}</h2>
      <h2> - {incorrectAnswer1}</h2>
      <h2> - {incorrectAnswer2}</h2>

      {/* {console.log('props from Question', props.facts.facts[1].q_and_a[0].id)} */}

      {/* {console.log('question', question[0].question)} */}

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
