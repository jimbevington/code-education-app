import React from 'react';
import Heading from './Heading';
import Alien from './Alien';
import InfoBox from './InfoBox'
import SpeechBubble from './SpeechBubble';
import Arrow from './Arrow';
import EnterYourName from '../containers/EnterYourName';
import './Intro.css';

const Intro = (props) => {

  const nameForm = () => {
    return <EnterYourName handleSubmitClick={props.handleNameSaveClick} />
  }

  const speechBubbleParas = ['Hi, I\'m Divvy!', 'What\'s your name?', nameForm()];

  return (
    <section id='intro-page'>
      <Heading text='Welcome to Kidz Who Code'/>
      <SpeechBubble paras={speechBubbleParas}/>
      <Alien />
      <InfoBox
        text='Are you ready to become a developer. Lets learn what code is, program a rocket ship and test your knowledge!'
      />
      <Arrow direction="downArrow" link="Facts"/>
    </section>
  )
}


// Enter Your Name form
// Down Arrow

export default Intro;
