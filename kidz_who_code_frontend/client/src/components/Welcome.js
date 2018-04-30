import React from 'react';
import DownArrow from "./public/downarrow.png";
import Alien from "./public/alien.jpg";
import './Welcome.css';

const Welcome = (props) => {
  return(
    <div>
      <h1>This is the welcome text</h1>
      <section class="alien">
      <img src={Alien} alt="this is an alien" width="200" height="200"/>
      <p id="speechbubble">This is the text to go in the speech bubble</p>
      </section>
    <section class="infobox">
      <h2 id="infobox-heading">Info Box Heading</h2>
      <p>This is where all the words in the info box are going to go</p>
    </section>
    <img src={DownArrow} width="200" height="200" alt="this should be a down arrow" />
    </div>
  )
}

export default Welcome;
