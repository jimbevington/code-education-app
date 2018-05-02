import React from "react";
import CompInfo from "./CompInfo.js";
import Heading from './Heading';
import CodeInfo from "./CodeInfo.js";
import Code from "./Code.js";
import Order from "./Order.js";
import Bug from "./Bug.js";
import Arrow from './Arrow';
import Alien from './Alien.js'
import SpeechBubble from './SpeechBubble';
import './Fact.css'



const Fact = (props) => {

  const makeFactsHeading = () => {
    return <Heading text="Let's Start Learning"/>;
  }

  const speechBubbleContents = [makeFactsHeading(), 'Click on each button to find out more.'];

  if(props.length === 0) return null;
  return (
    <section className='page' >

      <header>
        <Arrow direction="upArrow" link="Intro"/>
        {/* <h1>Fun Facts!</h1> */}
        <SpeechBubble paras={speechBubbleContents} width='600px' height="150px" />
      </header>
        <Alien id='fact-alien' floatStyle="float-none" />
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
