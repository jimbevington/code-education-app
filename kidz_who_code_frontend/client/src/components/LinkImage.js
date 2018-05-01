import React from 'react'

const LinkImage = (props) => {

  return (
    <a href={props.href}>
      <img
        src={props.img}
        alt={props.alt}
        width={props.width}
      />
    </a>
  )
}

export default LinkImage;
