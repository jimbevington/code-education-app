import React from "react";
import Popup from "reactjs-popup";

const CompInfo = (props) => (
  <Popup
    trigger={<button className="button"> Click Me! </button>}
    modal
    >

      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> What is a COMPUTER? </div>
          <div className="content">

            <div>
              {props.facts.map(fact =>
                <div key={fact.id}>
                  <p>{props.facts[0].answer}</p>
                </div>
              )}


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
            </div>
            // </div>
          )}
        </Popup>
      );





      export default CompInfo;
