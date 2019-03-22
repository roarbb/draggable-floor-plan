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

          <Table id="16" position={[5, 37]} />
          <Table id="17" position={[7, 37]} />
          <Table id="18" position={[5, 33]} />
          <Table id="19" position={[7, 33]} />
          <Table id="20" horizontal={true} position={[5, 31]} />

          <Table id="21" position={[12, 37]} />
          <Table id="22" position={[14, 37]} />
          <Table id="23" position={[12, 33]} />
          <Table id="24" position={[14, 33]} />
          <Table id="25" position={[12, 29]} />
          <Table id="26" position={[14, 29]} />

          <Table id="27" position={[21, 37]} />
          <Table id="28" position={[23, 37]} />
          <Table id="29" position={[21, 33]} />
          <Table id="30" position={[23, 33]} />
          <Table id="31" position={[21, 29]} />
          <Table id="32" position={[23, 29]} />

          <Table id="33" position={[30, 37]} />
          <Table id="34" position={[32, 37]} />
          <Table id="35" position={[30, 33]} />
          <Table id="36" position={[32, 33]} />
          <Table id="37" position={[30, 29]} />
          <Table id="38" position={[32, 29]} />

          <Table id="39" position={[39, 37]} />
          <Table id="40" position={[41, 37]} />
          <Table id="41" position={[39, 33]} />
          <Table id="42" position={[41, 33]} />
          <Table id="43" position={[39, 29]} />
          <Table id="44" position={[41, 29]} />

          <Table id="45" position={[38, 1]} />
          <Table id="46" position={[40, 1]} />
          <Table id="47" position={[38, 5]} />
          <Table id="48" position={[40, 5]} />

          <Table id="49" position={[38, 10]} />
          <Table id="50" position={[40, 10]} />
          <Table id="51" position={[38, 14]} />
          <Table id="52" position={[40, 14]} />
          <Table id="53" position={[38, 18]} />
          <Table id="54" position={[40, 18]} />

          <Table id="55" position={[45, 1]} />
          <Table id="56" position={[47, 1]} />
          <Table id="57" position={[45, 5]} />
          <Table id="58" position={[47, 5]} />
        </div>
      </div>
    )
  }
}

export default FloorPlanTemplate;