import React from "react";
import Popup from "reactjs-popup";

const Order = () => (

<Popup
  trigger={<button className="button"> Click Me! </button>}
  modal

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
        Before you write your code you need to think about the order it needs
        to be in. Think about when you get ready to go outside, you need to put
        your socks on before your shoes. If you put your shoes on before your
        socks that would be silly wouldn’t it?! The same goes for code, the
        order of instructions is very important.
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
