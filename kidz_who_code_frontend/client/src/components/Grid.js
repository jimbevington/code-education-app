import React from 'react';
import Cell from './Cell';

const Grid = (props) => {

  // do this as a method eventually, this is a test

  return  (
    <React.Fragment>
      <div>
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div>
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div>
        <Cell />
        <Cell />
        <Cell />
      </div>
  </React.Fragment>
  )
}

export default Grid;
