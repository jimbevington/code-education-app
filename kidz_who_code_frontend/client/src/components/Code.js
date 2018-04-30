import React from "react";
import Popup from "reactjs-popup";




const Code = () => (

  <Popup
    trigger={<button className="button"> Click Me! </button>}
    modal
    // contentStyle={contentStyle}
  >
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> What does code LOOK like? </div>
        <div className="content">
          {" "}
          <br />
          Code is made up of words, numbers and symbols. You need to put them in
          the right order to tell your computer what you want it to do. Just
          like a set of instructions.
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



  export default Code;
