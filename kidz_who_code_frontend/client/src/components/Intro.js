import React from 'react';
import Heading from './Heading';
import divvy from './public/divvy.svg';
import InfoBox from './InfoBox'
import SpeechBubble from './SpeechBubble';
import Arrow from './Arrow';
import EnterYourName from '../containers/EnterYourName';
import Alien from './Alien';
import './Intro.css';

const Intro = (props) => {

  const nameForm = () => {
    return <EnterYourName handleSubmitClick={props.handleNameSaveClick} />
  }

  const speechBubbleParas = ['Hi, I\'m Divvy!', 'What\'s your name?', nameForm()];

  return (
    <section id='intro-page' className='page'>
      <header id="kidz-who-code-title">
        <Heading id='site-title' text='Kidz Who Code'/>
      </header>
      <Alien floatStyle="float-none" class='alienpic'/>
      <div style={{'alignSelf': 'center'}}>
        <SpeechBubble paras={speechBubbleParas} width="300px"/>
      </div>
      {/* <img className="divvy" src={divvy} alt="divvy"/> */}
      <InfoBox
        text="Are you ready to become a developer? Let's learn what code is, program a rocket ship and test your knowledge!"
      />
      <Arrow direction="downArrow" link="Facts"/>
    </section>
  )
}

export default Intro;
