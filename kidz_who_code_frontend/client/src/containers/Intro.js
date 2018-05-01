import React from 'react';
import Heading from '../components/Heading';
import Welcome from '../components/Welcome';

class Intro extends React.Component {

  render(){
    return (
      <section id='intro-page'>
        <Heading text='Welcome to Kidz Who Code'/>
        <Welcome />
      </section>
    )
  }

}

export default Intro;
