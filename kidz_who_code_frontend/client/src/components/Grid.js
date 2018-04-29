import React from 'react';
import Cell from './Cell';
import './Grid.css';

const Grid = (props) => {

  // do this as a method eventually, this is a test

  return  (
    <React.Fragment>
      <div className='row'>
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div className='row'>
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div className='row'>
        <Cell />
        <Cell />
        <Cell />
      </div>
  </React.Fragment>
  )
}

export default Grid;
