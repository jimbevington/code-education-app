import React from 'react';
import './SpeechBubble.css';

const SpeechBubble = (props) => {
  return <p className='speech-bubble'>{props.text}</p>
}

export default SpeechBubble;
