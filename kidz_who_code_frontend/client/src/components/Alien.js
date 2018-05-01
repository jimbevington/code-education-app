import React from 'react';
import alien from './public/divvy.svg';


const Alien = () => {
  return (
    <img
      className="alienpic"
      src={alien} alt="Scary Alien"
      width="200" height="200"/>
  )
}

export default Alien;
