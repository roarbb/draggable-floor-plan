import React from 'react';

function Entrance(props) {
  return <div className="entrance room-with-label" id={props.id || ""}>
    <div className="label">{props.label || "Door"}</div>
  </div>
}

export default Entrance;