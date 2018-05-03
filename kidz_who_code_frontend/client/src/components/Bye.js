import React from 'react';
import Arrow from './Arrow';
import Alien from './Alien';
import SpeechBubble from './SpeechBubble';
import LinkImage from './LinkImage';
import codeclan from './public/codeclan-logo.png';

const Bye = () => {

  const wellDone = 'Well Done! You\'re now a Junior Developer!';
  const signUp = 'You\'re ready for your next challenge';

  const bubbleContents = [wellDone, signUp];

  return (
    <section id="bye" className="page">
      <header>
        <Arrow direction='upArrow' link='#quiz' />
      </header>
      <Alien floatStyle="float-none" class='alienpic'/>
      <section className='column' style={{'alignSelf': 'center'}}>
        <SpeechBubble paras={bubbleContents} width='300px'/>
        <LinkImage
          href="https://codeclan.com/"
          img={codeclan}
          alt="Codeclan Logo"
          width='400px'
        />
      </section>
      <Arrow direction="rightArrow" link='#intro-page' />
    </section>
  )
}

export default Bye;
