import React from 'react';
import './Go.css';

const Go = (props) => {
  return <button
          // className="button"
          id='go-button'
          onClick={props.handleClick}>
            GO!
          </button>
}

export default Go;
