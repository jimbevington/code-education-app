import React from 'react';
import Arrow from './Arrow';
import Alien from './Alien';
import SpeechBubble from './SpeechBubble';
import LinkImage from './LinkImage';
import codeclan from './public/codeclan-logo.png';

const Bye = () => {

  const wellDone = 'Well Done! You\'re now a Junior Developer!';
  const signUp = 'You\'re ready for your next challenge';
  const codeClan = () => {
    return <LinkImage
            href="https://codeclan.com/"
            img={codeclan}
            alt="Codeclan Logo"
          />
  }
  // const codeClan = () => {
  //   return (
  //     <a href="https://codeclan.com/">
  //       <img src={codeclan} alt="CodeClan logo"/>
  //     </a>
  // }

  const bubbleContents = [wellDone, signUp, codeClan()];

  return (
    <section id="bye">
      <Arrow direction='upArrow' link='Quiz' />
      <Alien />
      <SpeechBubble paras={bubbleContents}/>
      <Arrow direction="rightArrow" link='Intro' />
    </section>
  )
}

export default Bye;
