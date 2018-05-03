import React from 'react';
import './Question.css';

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
      <button className="button" id="answer-button" onClick={props.handleAnswerClick} value={correctAnswer}>{correctAnswer}</button>
      <button className="button" id="answer-button" onClick={props.handleAnswerClick} value={incorrectAnswer1}>{incorrectAnswer1}</button>
      <button className="button" id="answer-button" onClick={props.handleAnswerClick} value={incorrectAnswer2}>{incorrectAnswer2}</button>
    </React.Fragment>
  )
}

export default Question;
