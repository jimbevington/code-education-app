import React from 'react';
import './Heading.css';

const Heading = (props) => {
  return (
      <h1 className='heading' id={props.id}>{props.text}</h1>
  )
}

export default Heading;
