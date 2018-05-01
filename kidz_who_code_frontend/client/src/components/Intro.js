import React from 'react';
import Heading from './Heading';
import Welcome from './Welcome';
import InfoBox from './InfoBox';
import './Intro.css';

const Intro = () => {
  return (
    <section id='intro-page'>
      <Heading text='Welcome to Kidz Who Code'/>
      <InfoBox
        text='This is where all the words in the info box are going to go'
      />
    </section>
  )
}


// Heading
// Alien
// Info
// Speech Bubble
// Enter Your Name form
// Down Arrow

export default Intro;
