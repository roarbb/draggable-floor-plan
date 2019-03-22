import React, { Component } from 'react';
import './FloorPlanTemplate.css';
import Table from './floor-plan/Table'

class FloorPlanTemplate extends Component {
  render() {
    return (
      <div className="grid">
        <div className="floor">
          <div className="hole" />
          <Table id="1" position={[3, 1]} />
          <Table id="2" position={[3, 5]} />
          <Table id="3" position={[5, 1]} />
          <Table id="4" position={[5, 5]} />

          <Table id="5" position={[11, 1]} />
          <Table id="6" position={[13, 1]} />

          <Table id="7" position={[13, 6]} />
          <Table id="8" position={[11, 6]} />
          <Table id="9" position={[13, 10]} />
          <Table id="10" position={[11, 10]} />
          <Table id="11" position={[13, 14]} />
          <Table id="12" position={[11, 14]} />
          <Table id="13" position={[13, 18]} />
          <Table id="14" position={[11, 18]} />

          <Table id="15" horizontal={true} position={[11, 22]} />
        </div>
      </div>
    )
  }
}

export default FloorPlanTemplate;