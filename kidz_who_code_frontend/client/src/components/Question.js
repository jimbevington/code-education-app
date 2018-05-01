import React from 'react';

const Question = (props) => {

  const questionData = props.qAndAs[props.currentQuestion];

  const question = questionData.question;
  const correctAnswer = questionData.correct_answer;
  const incorrectAnswer1 = questionData.incorrect_answer_1;
  const incorrectAnswer2 = questionData.incorrect_answer_2;

  return(
    <React.Fragment>
      <h2>Q{questionData.id}. {question}</h2>
      <button className="button">{correctAnswer}</button>
      <button className="button">{incorrectAnswer1}</button>
      <button className="button">{incorrectAnswer2}</button>
    </React.Fragment>
  )
}

export default Question;
