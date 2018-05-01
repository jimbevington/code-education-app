import React from "react";
import CompInfo from "./CompInfo.js";
import CodeInfo from "./CodeInfo.js";
import Code from "./Code.js";
import Order from "./Order.js";
import Bug from "./Bug.js";

const Fact = (props) => {
  return (
    <React.Fragment>
      <h1>Facts</h1>
      <ul>
        {props.facts[0].info.map(fact =>
          <div key={fact.id}>
            <li>{fact.question}</li>
            <li>{fact.answer}</li>
          </div>
        )}
      </ul>
    </React.Fragment>
  )
}

export default Fact;
