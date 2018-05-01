import React from 'react';
import Heading from '../components/Heading';
import Welcome from '../components/Welcome';

class Intro extends React.Component {

  render(){
    return (
      <div>
      <Heading text='luke is awesome'/>
      <Welcome />
      </div>
    )
  }

}

export default Intro;
