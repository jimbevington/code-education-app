import React from 'react';
import './Welcome.css';

const Welcome = (props) => {
  return(
    <div>
      <h1>This is the welcome text</h1>
      <img src='https://usercontent2.hubstatic.com/13971459.jpg' alt="this is an alien" width="200" height="200"/>
      <p id="speechbubble">This is the text to go in the speech bubble</p>
    </div>
  )
}

export default Welcome;
