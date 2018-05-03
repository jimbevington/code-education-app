import React from 'react';
import './Popup.css'

const Popup = (props) => {

  // const elements = props.paras.map()

  let popupClass = "popup hidden";

  if(props.class){
    popupClass = "popup " + props.class;
  }

  return (
    <div className="popup hidden">
      <h1>I am a popup</h1>
    </div>
  )
}

export default Popup;
