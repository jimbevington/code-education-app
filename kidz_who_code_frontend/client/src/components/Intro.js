import React from 'react';
import Heading from './Heading';
import Alien from './Alien';
import InfoBox from './InfoBox'
import SpeechBubble from './SpeechBubble';
import './Intro.css';

const Intro = () => {
  return (
    <section id='intro-page'>
      <Heading text='Welcome to Kidz Who Code'/>
      <SpeechBubble text="This is the text to go in the speech bubble. What's your name?"/>
      <Alien />
      <InfoBox
        text='Are you ready to become a developer. Lets learn what code is, program a rocket ship and test your knowledge!'
      />
      <Arrow direction="down" link="Facts"/>
    </section>
  )
}


// Enter Your Name form
// Down Arrow

export default Intro;
