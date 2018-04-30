import React from 'react';
import DownArrow from "./public/downarrow.png";
import Alien from "./public/alien.jpg";
import './Welcome.css';

const Welcome = (props) => {
  return(
    <div id="welcome">
      <h1>This is the welcome text</h1>
      <section className="alien">
      <img src={Alien} alt="this is an alien" width="200" height="200"/>

      <form method="get">
      <p id="speechbubble">This is the text to go in the speech bubble. What's your name?</p>
      <input type="text" name="name" />
      <input type="submit" name="submitbutton" value="Let's get Divvy home!" />
    </form>
      </section>
    <section className="infobox">
      <h2 id="infobox-heading">Info Box Heading</h2>
      <p>This is where all the words in the info box are going to go</p>
    </section>
    <img src={DownArrow} width="200" height="200" alt="this should be a down arrow" />
    </div>
  )
}

export default Welcome;
