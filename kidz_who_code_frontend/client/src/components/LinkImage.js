import React from 'react'

const LinkImage = (props) => {
  return (
    <a href={props.href}>
           <img src={props.img} alt={props.alt}/>
    </a>
  )
}

export default LinkImage;
