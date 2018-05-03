import React from 'react';
import InfoBox from './InfoBox'
import SpeechBubble from './SpeechBubble';
import Arrow from './Arrow';
import EnterYourName from '../containers/EnterYourName';
import Alien from './Alien';
import Logo from './public/LogoMakr_0NEgHv.png'
import './Intro.css';

const Intro = (props) => {

  const nameForm = () => {
    return <EnterYourName handleSubmitClick={props.handleNameSaveClick} />
  }

  const speechBubbleParas = ['Hi, I\'m Divvy!', 'What\'s your name?', nameForm()];

  const welcomeInfo = ['Oh no! Divvy has crash-landed on earth and can\'t work his rocket!', 'Can you help?', 'Learn about computers so that you can program his rocket and send him home.', 'Click the arrow to accept this mission!']

  return (
    <section id='intro-page' className='page'>
      <header id="kidz-who-code-title">
        {/* <Heading id='site-title' text='Kidz Who Code'/> */}
        <img src={Logo} alt="logo"/>
      </header>
      <div style={{display: 'flex', 'flex-flow': 'column'}}>
        <SpeechBubble id='intro-speech' paras={speechBubbleParas} width="300px"/>
        <Alien floatStyle="float-none" class='alienpic'/>
      </div>
      <InfoBox
        paras={welcomeInfo}
        id='intro-info'
      />
      <Arrow direction="downArrow" link="#fact-page"/>
    </section>
  )
}

export default Intro;
