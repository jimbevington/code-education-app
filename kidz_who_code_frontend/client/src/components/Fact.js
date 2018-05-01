import React from "react";
import CompInfo from "./CompInfo.js";
import CodeInfo from "./CodeInfo.js";
import Code from "./Code.js";
import Order from "./Order.js";
import Bug from "./Bug.js";

// const Fact = (props) => (
// <div>
//   {props.facts[0].info.map(fact =>
//     <div key={fact.id}>
//     <p>{fact.question}</p>
//
//
//   </div>
//
// )}

/* // {/* {props.facts[1].answer} */



const Fact = (props) => {
  if(props.length === 0) return null;
  return (
    <div>
      <CodeInfo facts={props} />
      {/* <p>What does code LOOK like?</p>
        <Code />
        <p>Does code need to be in ORDER?</p>
        <Order />
        <p>What are computer BUGS?</p>
        <Bug /> */}
      </div>
    );

  }
  export default Fact;
