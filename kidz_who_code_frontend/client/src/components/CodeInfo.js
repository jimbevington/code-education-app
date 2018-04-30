import React from "react";
import Popup from "reactjs-popup";

const CodeInfo = () => (

<Popup
  trigger={<button className="button"> What is CODE? </button>}
  modal
>
  {close => (
    <div className="modal">
      <a className="close" onClick={close}>
        &times;
      </a>
      <div className="header"> What is CODE? </div>
      <div className="content">
        {" "}
        <br />
        Code allows you to make things with your computer. You can make anything
        you want! You could make a game, a website or show some pictures…..What
        would you like to make?
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


export default CodeInfo;
