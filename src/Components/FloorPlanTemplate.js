import React, { Component } from 'react';
import './FloorPlanTemplate.css';
import Table from './floor-plan/Table'

class FloorPlanTemplate extends Component {
  render() {
    return (
      <div className="grid">
        <div className="floor">
          <div className="hole" />
          <Table id="table-1" vertical={true} position={[5, 5]} />
          <Table id="table-2" vertical={true} position={[7, 5]} />
          <Table id="table-3" vertical={false} position={[5, 9]} />
        </div>
      </div>
    )
  }
}

export default FloorPlanTemplate;