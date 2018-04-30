import React from 'react';
import './Heading.css';

const Heading = (props) => {
  return(
    <div>
    <h1 id="title">{props.text}</h1>
<p>This is a font test</p>
</div>
)
}

export default Heading;
