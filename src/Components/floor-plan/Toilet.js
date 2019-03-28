import React from 'react';

function Toilet(props) {
  return <div className="toilet room-with-label" id={props.id || ""}>
    <div className="label">{props.label || "Toilet"}</div>
  </div>
}

export default Toilet;