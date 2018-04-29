import React from 'react';
import Cell from './Cell';
import './Grid.css';

const Grid = (props) => {

  // do this as a method eventually, this is a test
  let cells = [];

  for (let i = 0; i < props.squaredSize; i++){
    const row = [];
    for (let j = 0; j < props.squaredSize; j++){
      row.push(<Cell key={j} />);
    }
    cells.push(
      <div className='row' key={i}>
        {row}
      </div>
    )
  }

  return  (
    <React.Fragment>
      {cells}
    </React.Fragment>
  )
}

export default Grid;
