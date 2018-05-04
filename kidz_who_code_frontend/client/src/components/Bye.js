import React from 'react';
import Arrow from './Arrow';
import Alien from './Alien';
import './Bye.css';

const Bye = (props) => {

  return (
    <section id="bye" className="byepage">
      <header>
        <Arrow direction='upArrow' link='#quiz' />
      </header>
      <h4 id="user-cert">{props.userName}</h4>
      <Alien floatStyle="float-none" class='alienpic'/>
      <Arrow direction="rightArrow" link='/' />

    </section>
  )
}

export default Bye;
