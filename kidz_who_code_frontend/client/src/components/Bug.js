import React from "react";
import Popup from "reactjs-popup";

const Bug = () => (

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
      <div className="header"> Does code need to be in ORDER? </div>
      <div className="content">
        {" "}
        <br />
        When your code doesn’t do what you want it to do, that’s a bug! Imagine
        you made a robot, and you want it to go forward when your press the up
        key, but instead the robot moves backwards - thats a bug! Bugs are
        nothing to be afraid of, they help us learn and allows us to make our
        code even better.
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


export default Bug;
