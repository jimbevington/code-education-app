import React from 'react';
import Arrow from './Arrow';
import Alien from './Alien';
import SpeechBubble from './SpeechBubble';
import LinkImage from './LinkImage';
import codeclan from './public/codeclan-logo.png';
import './Bye.css';

const Bye = () => {

  const wellDone = 'Well Done! You\'re now a Junior Developer!';
  const signUp = 'You\'re ready for your next challenge';

  const bubbleContents = [wellDone, signUp];

  return (
    <section id="bye page">
      <Arrow direction='upArrow' link='Quiz' />
      <SpeechBubble paras={bubbleContents}/>
      <LinkImage
        href="https://codeclan.com/"
        img={codeclan}
        alt="Codeclan Logo"
        width='400px'
      />
      <Alien floatStyle="float-left"/>
      <Arrow direction="rightArrow" link='Intro' />
    </section>
  )
}

export default Bye;
