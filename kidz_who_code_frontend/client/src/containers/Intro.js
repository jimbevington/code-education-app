import React from 'react';
import Heading from '../components/Heading';
import Welcome from '../components/Welcome';

class Intro extends React.Component {

  render(){
    return (
      <div>
      <Heading text='Welcome to Kidz Who Code'/>
      <Welcome />
        // Info
        // Speech Bubble
        // Enter Your Name form
        // Down Arrow
      </div>
    )
  }

}

export default Intro;
