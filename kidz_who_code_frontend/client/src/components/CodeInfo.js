import React from "react";
import Popup from "reactjs-popup";


const CodeInfo = (props) => {
  return (
      <Popup
        trigger={<button className="button" id='fact'> {props.facts.facts[0].info[1].question} </button>}
        modal
        >
          {close => (
            <div className="modal">
              <a className="close" onClick={close}>
                &times;
              </a>

              <div className="header"> {props.facts.facts[0].info[1].question} </div>

              <div className="content">
                {" "}
                <br />
                {props.facts.facts[0].info[1].answer}
                <br />
              </div>


            <button
              className="button"
              onClick={() => {
                close();
              }}
              >
                Close
              </button>
            </div>

          )}
        </Popup>
      )
      };



      export default CodeInfo;
