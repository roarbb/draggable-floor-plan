import React from 'react';

function Stairs(props) {
  const numberOfStairs = 13;
  const stairs = [];

  for (let index = 0; index < numberOfStairs; index++) {
    stairs.push(<div className={(props.inverted) ? "step inverted" : "step"} />)
  }

  return <div className="stairs">
    {stairs}
  </div>;
}

export default Stairs;