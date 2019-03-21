import React, { Component } from 'react';
import './FloorPlanTemplate.css';

function Table(props) {
  const orientation = props.orientation || 'horizontal';

  return <div className={`table ${orientation}`} />;
}

class FloorPlanTemplate extends Component {
  render() {
    return (
      <div className="grid">
        <div className="floor">
          <div className="hole" />
          <Table id="table-1" orientation="vertical" />
        </div>
      </div>
    )
  }
}

export default FloorPlanTemplate;