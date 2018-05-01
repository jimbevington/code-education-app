import React from 'react';
import './SpeechBubble.css';

const SpeechBubble = (props) => {

  const paras = props.paras.map((text, index) => {
    if (typeof text === 'string'){
      return <p key={index}>{text}</p>
    }
    return <article key={index}>{text}</article>
  })

  return (
    <article
      className='speech-bubble'
      style={{width: props.width}}
    >
      {paras}
    </article>
  )
}

export default SpeechBubble;
