import React from 'react';
import './SpeechBubble.css';

const SpeechBubble = (props) => {

  const paras = props.paras.map((text, index) => {
    return <p key={index}>{text}</p>
  })

  return (
    <article className='speech-bubble'>
      {paras}
    </article>
  )
}

export default SpeechBubble;
