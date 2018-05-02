import React from 'react';
import './Heading.css';

const Heading = (props) => {
  return (
      <h1 className="title">{props.text}</h1>
  )
}

export default Heading;
