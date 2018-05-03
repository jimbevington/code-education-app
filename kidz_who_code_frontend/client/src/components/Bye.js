import React from 'react';
import Arrow from './Arrow';
import Alien from './Alien';
import SpeechBubble from './SpeechBubble';
import LinkImage from './LinkImage';
import codeclan from './public/codeclan-logo.png';
import Certificate from "./public/Certificate.png";
import InfoBox from './InfoBox';
import './Bye.css';

const Bye = (props) => {

  return (
    <section id="bye" className="byepage">
      <header>
        <Arrow direction='upArrow' link='#quiz' />
      </header>
      <h4 id="user-cert">{props.userName}</h4>
      <Alien floatStyle="float-none" class='alienpic'/>
      <Arrow direction="rightArrow" link='#intro-page' />

    </section>
  )
}

export default Bye;
