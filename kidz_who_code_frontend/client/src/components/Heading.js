import React from 'react';
import './Heading.css';

const Heading = (props) => {
  return (
    <div>
      <h1 id="title">{props.text}</h1>
    </div>
  )
}

export default Heading;
