import React from 'react';
import alien from './public/divvy.svg';
import './Alien.css';


const Alien = (props) => {

  let id = '';

  if(props.id){
    id = props.id;
  }

  let alienClass = ''

  if(props.class){
    alienClass = props.class;
  }

  const alienClasses = alienClass + ' ' + props.floatStyle + ' clearfix';

  return (
    <img
      id={id}
      className={alienClasses}
      src={alien} alt="Scary Alien"
      width="200" height="200"/>
  )
}

export default Alien;
