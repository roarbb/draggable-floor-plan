import React from 'react';
import './Table.css';

function Table(props) {
  const position = props.position || [1, 1];
  let tableWidth = 4;
  let tableHeight = 2;

  if(props.vertical) {
    [tableHeight, tableWidth] = [tableWidth, tableHeight]
  }

  const style = {
    'grid-column': `${position[0]} / span ${tableWidth}`,
    'grid-row': `${position[1]} / span ${tableHeight}`,
  }

  return <div className={`table`} id={props.id} style={style} />;
}

export default Table;