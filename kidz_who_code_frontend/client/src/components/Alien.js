import React from 'react';
import alien from "./public/alien.jpg";

const Alien = () => {
  return (
    <img
      className="alienpic"
      src={alien} alt="Divvy the Alien"
      width="200" height="200"/>
  )
}

export default Alien;
