import React from 'react';
import './Go.css';

const Go = (props) => {
  return <button
          className="goButton"
          onClick={props.handleClick}>
            Go!
          </button>
}

export default Go;
