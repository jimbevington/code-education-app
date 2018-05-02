import React from 'react';
import Heading from './Heading';
import divvy from './public/divvy.svg';
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
    <section id='intro-page' className='page'>
      <Heading text='Welcome to Kidz Who Code'/>
      <SpeechBubble paras={speechBubbleParas}/>
      <img className="divvy" src={divvy} alt="divvy"/>
      <InfoBox
        text="Are you ready to become a developer? Let's learn what code is, program a rocket ship and test your knowledge!"
      />
      <Arrow direction="downArrow" link="Facts"/>
    </section>
  )
}

export default Intro;
