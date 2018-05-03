import React from 'react';
import './Popup.css'

const Popup = (props) => {

  const elements = props.paras.map((para, index) => {
    return <p key={index}>{para}</p>
  })

  const popupClass = "popup " + props.class;

  return (
    <div className={popupClass}>
      {elements}
    </div>
  )
}

export default Popup;
