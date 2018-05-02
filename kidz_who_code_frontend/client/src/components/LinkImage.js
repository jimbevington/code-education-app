import React from 'react'

const LinkImage = (props) => {

  return (
    <a href={props.href}>
      <img
        src={props.img}
        alt={props.alt}
        width={props.width}
        style={{display: 'inline-block'}}
      />
    </a>
  )
}

export default LinkImage;
