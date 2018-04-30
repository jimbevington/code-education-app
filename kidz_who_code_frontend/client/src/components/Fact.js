import React from "react";
import CompInfo from "./CompInfo.js";
import CodeInfo from "./CodeInfo.js";
import Code from "./Code.js";
import Order from "./Order.js";
import Bug from "./Bug.js";

const Fact = () => (
  <div>


    <p>What is a COMPUTER?</p>
    <CompInfo />

    <p>What is CODE?</p>
    <CodeInfo />

    <p>What does code LOOK like?</p>
    <Code />

    <p>Does code need to be in ORDER?</p>
    <Order />

    <p>What are computer BUGS?</p>
    <Bug />


  </div>
);

export default Fact;
