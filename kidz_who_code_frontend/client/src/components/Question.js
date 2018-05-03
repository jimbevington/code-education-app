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
      <h2>Q{questionData.id}. {question}</h2>
<<<<<<< HEAD
      <button
        className="button"
        onClick={props.handleAnswerClick}
        value={correctAnswer}>
        {correctAnswer}
      </button>
      <button
        className="button"
        onClick={props.handleAnswerClick}
        value={incorrectAnswer1}>
        {incorrectAnswer1}
      </button>
      <button
        className="button"
        onClick={props.handleAnswerClick}
        value={incorrectAnswer2}>
        {incorrectAnswer2}
      </button>
    </article>
=======
      <button className="button" id="answer-button" onClick={props.handleAnswerClick} value={correctAnswer}>{correctAnswer}</button>
      <button className="button" id="answer-button" onClick={props.handleAnswerClick} value={incorrectAnswer1}>{incorrectAnswer1}</button>
      <button className="button" id="answer-button" onClick={props.handleAnswerClick} value={incorrectAnswer2}>{incorrectAnswer2}</button>
    </React.Fragment>
>>>>>>> 17aedd951a4ee73f04285bfbf62e809d3ddecf01
  )
}

export default Question;
