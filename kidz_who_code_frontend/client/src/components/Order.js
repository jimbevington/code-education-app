import React from "react";
import Popup from "reactjs-popup";

const Order = (props) => (

  <Popup
    trigger={<button className="button"> {props.facts.facts[0].info[3].question} </button>}
    modal

    >
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> {props.facts.facts[0].info[3].question} </div>
          <div className="content">
            {" "}
            <br />
            {props.facts.facts[0].info[3].answer}
            <br />

          </div>

          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
            >
              Close
            </button>
          </div>

        )}
      </Popup>
    );


    export default Order;
