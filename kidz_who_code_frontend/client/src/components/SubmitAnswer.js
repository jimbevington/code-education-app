import React from 'react';
import './SubmitAnswer.css';

const SubmitAnswer = (props) => {
  return (
    <button
      id="submit-answer-button"
      className={props.class}
      onClick={props.handleClick}>
      Next
    </button>
  )
}

export default SubmitAnswer;
