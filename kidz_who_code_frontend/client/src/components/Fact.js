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
    <div id='facts-container' className='page'>
      <Arrow direction="upArrow" link="Intro"/>
      <h1>Fun Facts!</h1>
      <CompInfo facts={props} />
      <CodeInfo facts={props} />
      <Code facts={props} />
      <Order facts={props}  />
      <Bug facts={props} />
      <Arrow direction="downArrow" link="Game"/>
      <Alien />
      <p id="speechbubble">Let's start learning! Click on each button find out more</p>
    </div>
  );

}
export default Fact;
