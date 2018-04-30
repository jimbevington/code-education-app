import React from "react";
import Popup from "reactjs-popup";




const CompInfo = () => (

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
          {" "}
          <br />
          A computer is a type of machine which can follow instructions and do
          lots of useful things. It doesn’t have a brain like you, but with code
          you can tell it what you want it to do.
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





export default CompInfo;
