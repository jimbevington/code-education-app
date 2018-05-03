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
    <article className="question">
      <h2>Q{questionData.id}.</h2>
      <h2>{question}</h2>
      <button
        className="button"
        onClick={props.handleAnswerClick}
        id="answer-button"
        value={correctAnswer}>
        {correctAnswer}
      </button>
      <button
        className="button"
        onClick={props.handleAnswerClick}
        id="answer-button"
        value={incorrectAnswer1}>
        {incorrectAnswer1}
      </button>
      <button
        className="button"
        onClick={props.handleAnswerClick}
        id="answer-button"
        value={incorrectAnswer2}>
        {incorrectAnswer2}
      </button>
    </article>
  )
}

export default Question;
