import React from 'react';
import alien from './public/divvy.svg';
import './Alien.css';


const Alien = (props) => {

  const alienClasses = 'alienpic ' + props.floatStyle + ' clearfix';

  return (
    <img
      className={alienClasses}
      src={alien} alt="Scary Alien"
      width="200" height="200"/>
  )
}

export default Alien;
