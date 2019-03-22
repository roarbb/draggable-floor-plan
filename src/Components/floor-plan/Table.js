import React from 'react';

function Table(props) {
  const position = props.position || [1, 1];
  let tableWidth = 4;
  let tableHeight = 2;

  if(props.horizontal) {
    [tableHeight, tableWidth] = [tableWidth, tableHeight]
  }

  const style = {
    'grid-column': `${position[0]} / span ${tableHeight}`,
    'grid-row': `${position[1]} / span ${tableWidth}`,
  }

  return <div className={`table`} id={`table-${props.id}`} style={style} />;
}

export default Table;