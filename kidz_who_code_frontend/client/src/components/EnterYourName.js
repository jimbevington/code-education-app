import React from 'react';

const EnterYourName = (props) => {
  return (
    <form method="get">
      <input type="text" name="name" />
      <input type="submit" onClick={props.handleSubmitClick} value="Save" />
    </form>
  )
}

export default EnterYourName;
