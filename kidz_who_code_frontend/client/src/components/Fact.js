import React from "react";
import CompInfo from "./CompInfo.js";
import CodeInfo from "./CodeInfo.js";
import Code from "./Code.js";
import Order from "./Order.js";
import Bug from "./Bug.js";
import Arrow from './Arrow';
import Alien from './Alien.js'
import './Fact.css'



const Fact = (props) => {
  if(props.length === 0) return null;
  return (
    <div id='facts-container' >
      <Arrow direction="upArrow" link="Intro"/>
      <h1>Fun Facts!</h1>
      <br />
      <p id="speechbubble">Let's start learning! Click on each button to find out more.</p>
      <Alien id='fact-alien' floatStyle="float-none" />
       <CompInfo facts={props} />
      <br />
      <CodeInfo facts={props} />
      <br />
      <Code facts={props} />
      <br />
      <Order facts={props}  />
      <br />
      <Bug facts={props} />
      <Arrow direction="downArrow" link="Game"/>

    </div>
  );

}
export default Fact;
