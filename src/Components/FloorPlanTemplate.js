import React, { Component } from 'react';
import './FloorPlanTemplate.css';
import Desk from './floor-plan/Desk';
import Stairs from './floor-plan/Stairs';
import StandUpPod from './floor-plan/StandUpPod';
import Kitchen from './floor-plan/Kitchen';
import Toilet from './floor-plan/Toilet';

class FloorPlanTemplate extends Component {
  render() {
    return (
      <div className="grid">
        <div className="floor">
          <div className="hole" />
          <Stairs />
          <StandUpPod />
          <Kitchen />
          <Toilet />

          <Desk id="1" position={[3, 1]} />
          <Desk id="2" position={[3, 5]} />
          <Desk id="3" position={[5, 1]} />
          <Desk id="4" position={[5, 5]} />

          <Desk id="5" position={[11, 1]} />
          <Desk id="6" position={[13, 1]} />

          <Desk id="7" position={[13, 6]} />
          <Desk id="8" position={[11, 6]} />
          <Desk id="9" position={[13, 10]} />
          <Desk id="10" position={[11, 10]} />
          <Desk id="11" position={[13, 14]} />
          <Desk id="12" position={[11, 14]} />
          <Desk id="13" position={[13, 18]} />
          <Desk id="14" position={[11, 18]} />

          <Desk id="15" horizontal={true} position={[11, 22]} />

          <Desk id="16" position={[5, 37]} />
          <Desk id="17" position={[7, 37]} />
          <Desk id="18" position={[5, 33]} />
          <Desk id="19" position={[7, 33]} />
          <Desk id="20" horizontal={true} position={[5, 31]} />

          <Desk id="21" position={[12, 37]} />
          <Desk id="22" position={[14, 37]} />
          <Desk id="23" position={[12, 33]} />
          <Desk id="24" position={[14, 33]} />
          <Desk id="25" position={[12, 29]} />
          <Desk id="26" position={[14, 29]} />

          <Desk id="27" position={[21, 37]} />
          <Desk id="28" position={[23, 37]} />
          <Desk id="29" position={[21, 33]} />
          <Desk id="30" position={[23, 33]} />
          <Desk id="31" position={[21, 29]} />
          <Desk id="32" position={[23, 29]} />

          <Desk id="33" position={[30, 37]} />
          <Desk id="34" position={[32, 37]} />
          <Desk id="35" position={[30, 33]} />
          <Desk id="36" position={[32, 33]} />
          <Desk id="37" position={[30, 29]} />
          <Desk id="38" position={[32, 29]} />

          <Desk id="39" position={[39, 37]} />
          <Desk id="40" position={[41, 37]} />
          <Desk id="41" position={[39, 33]} />
          <Desk id="42" position={[41, 33]} />
          <Desk id="43" position={[39, 29]} />
          <Desk id="44" position={[41, 29]} />

          <Desk id="45" position={[38, 1]} />
          <Desk id="46" position={[40, 1]} />
          <Desk id="47" position={[38, 5]} />
          <Desk id="48" position={[40, 5]} />

          <Desk id="49" position={[38, 10]} />
          <Desk id="50" position={[40, 10]} />
          <Desk id="51" position={[38, 14]} />
          <Desk id="52" position={[40, 14]} />
          <Desk id="53" position={[38, 18]} />
          <Desk id="54" position={[40, 18]} />

          <Desk id="55" position={[45, 1]} />
          <Desk id="56" position={[47, 1]} />
          <Desk id="57" position={[45, 5]} />
          <Desk id="58" position={[47, 5]} />
        </div>
      </div>
    )
  }
}

export default FloorPlanTemplate;