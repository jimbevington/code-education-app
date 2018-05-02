import React from "react";
import CompInfo from "./CompInfo.js";
import CodeInfo from "./CodeInfo.js";
import Code from "./Code.js";
import Order from "./Order.js";
import Bug from "./Bug.js";
import Arrow from './Arrow';
import Alien from './Alien.js'
import SpeechBubble from './SpeechBubble';
import './Fact.css'



const Fact = (props) => {

  const speechBubbleText = ['Let\'s start learning! Click on each button to find out more.'];

  if(props.length === 0) return null;
  return (
    <section className='page' >

      <header>
        <Arrow direction="upArrow" link="Intro"/>
        <h1>Fun Facts!</h1>
      </header>
      <section style={{display: 'flex', 'flex-flow': 'column'}}>
        <SpeechBubble paras={speechBubbleText} />
        <Alien id='fact-alien' floatStyle="float-none" />
      </section>
      <section style={{display: 'flex', 'flex-flow': 'column', 'margin-bottom': '55px'}}>
        <CompInfo facts={props} />
        <br />
        <CodeInfo facts={props} />
        <br />
        <Code facts={props} />
        <br />
        <Order facts={props}  />
        <br />
        <Bug facts={props} />
      </section>
      <Arrow direction="downArrow" link="Game"/>
    </section>
  );

}
export default Fact;
