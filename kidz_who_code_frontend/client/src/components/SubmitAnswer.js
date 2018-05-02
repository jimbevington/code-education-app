import React from 'react';
import './SubmitAnswer.css';

const SubmitAnswer = (props) => {
  return <button className={props.class} onClick={props.handleClick}>Next Question</button>
}

export default SubmitAnswer;
