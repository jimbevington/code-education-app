import React from 'react';

const Question = (props) => {

  const questionData = props.qAndAs[props.currentQuestion];

  const question = questionData.question;
  const correctAnswer = questionData.correct_answer;
  const incorrectAnswer1 = questionData.incorrect_answer_1;
  const incorrectAnswer2 = questionData.incorrect_answer_2;

  return(
    <React.Fragment>
      <form>
        <h2>Q{questionData.id}. {question}</h2>
        <label>
          <input type='radio' name='answers' value={correctAnswer} checked={true} />
          {correctAnswer}
        </label>
        <label>
          <input type='radio' name='answers' value={incorrectAnswer1} />
          {incorrectAnswer1}
        </label>
        <label>
          <input type='radio' name='answers' value={incorrectAnswer2} />
          {incorrectAnswer2}
        </label>
      </form>
    </React.Fragment>
  )
}

export default Question;
