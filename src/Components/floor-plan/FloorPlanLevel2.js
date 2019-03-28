import React from 'react';
import './FloorPlanTemplate.css';
import Desk from './Desk';
import Stairs from './Stairs';
import StandUpPod from './StandUpPod';
import Kitchen from './Kitchen';
import Toilet from './Toilet';

function FloorPlanLevel2(props) {

  return (
    <div className="grid">
      <div className="floor">
        <div className="hole" />
        <Stairs />
        <StandUpPod />
        <Kitchen />
        <Toilet />

        <Desk id="22" position={[3, 1]} />
        <Desk id="24" position={[3, 5]} />
        <Desk id="33" position={[5, 1]} />
        <Desk id="25" position={[5, 5]} />

        <Desk id="26" position={[11, 1]} />
        <Desk id="27" position={[13, 1]} />

        <Desk id="29" position={[13, 6]} />
        <Desk id="28" position={[11, 6]} />
        <Desk id="31" position={[13, 10]} />
        <Desk id="30" position={[11, 10]} />
        <Desk id="33" position={[13, 14]} />
        <Desk id="32" position={[11, 14]} />
        <Desk id="35" position={[13, 18]} />
        <Desk id="34" position={[11, 18]} />

        <Desk id="36" horizontal={true} position={[11, 22]} />

        <Desk id="54" position={[5, 37]} />
        <Desk id="55" position={[7, 37]} />
        <Desk id="52" position={[5, 33]} />
        <Desk id="53" position={[7, 33]} />
        <Desk id="51" horizontal={true} position={[5, 31]} />

        <Desk id="60" position={[12, 37]} />
        <Desk id="61" position={[14, 37]} />
        <Desk id="58" position={[12, 33]} />
        <Desk id="59" position={[14, 33]} />
        <Desk id="56" position={[12, 29]} />
        <Desk id="57" position={[14, 29]} />

        <Desk id="66" position={[21, 37]} />
        <Desk id="67" position={[23, 37]} />
        <Desk id="64" position={[21, 33]} />
        <Desk id="65" position={[23, 33]} />
        <Desk id="62" position={[21, 29]} />
        <Desk id="63" position={[23, 29]} />

        <Desk id="72" position={[30, 37]} />
        <Desk id="73" position={[32, 37]} />
        <Desk id="70" position={[30, 33]} />
        <Desk id="71" position={[32, 33]} />
        <Desk id="68"position={[30, 29]} />
        <Desk id="69" position={[32, 29]} />

        <Desk id="78" position={[39, 37]} />
        <Desk id="79" position={[41, 37]} />
        <Desk id="76" position={[39, 33]} />
        <Desk id="77" position={[41, 33]} />
        <Desk id="74" position={[39, 29]} />
        <Desk id="75" position={[41, 29]} />

        <Desk id="37" position={[38, 1]} />
        <Desk id="38" position={[40, 1]} />
        <Desk id="39" position={[38, 5]} />
        <Desk id="40" position={[40, 5]} />

        <Desk id="45" position={[38, 10]} />
        <Desk id="46" position={[40, 10]} />
        <Desk id="47" position={[38, 14]} />
        <Desk id="48" position={[40, 14]} />
        <Desk id="49" position={[38, 18]} />
        <Desk id="50" position={[40, 18]} />

        <Desk id="41" position={[45, 1]} />
        <Desk id="42" position={[47, 1]} />
        <Desk id="43" position={[45, 5]} />
        <Desk id="44" position={[47, 5]} />
      </div>
    </div>
  )
}

export default FloorPlanLevel2;