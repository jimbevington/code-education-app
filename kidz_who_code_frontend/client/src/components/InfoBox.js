import React from 'react';
import './InfoBox.css';

const InfoBox = (props) => {

  const elements = props.paras.map((para, index) => {
    return <p key={index}>{para}</p>
  })
  return (
    <section className="infobox" id={props.id}>
      {elements}
    </section>
  )
}

export default InfoBox;
