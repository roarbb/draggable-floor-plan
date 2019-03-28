import React from 'react';
import './FloorPlanTemplate.css';
import Desk from './Desk';
import Stairs from './Stairs';
import DownstairsWest from './DownstairsWest';
import DownstairsEast from './DownstairsEast';
import DownstairsNorth from './DownstairsNorth';
import Toilet from './Toilet';
import Entrance from './Entrance';

function FloorPlanLevel1(props) {

  return (
    <div className="grid">
      <div className="floor">
        <Stairs inverted={true} />

        <Desk id="1" position={[18, 2]} />

        <Desk id="2" position={[3, 2]} />
        <Desk id="3" position={[5, 2]} />
        <Desk id="4" position={[3, 6]} />
        <Desk id="5" position={[5, 6]} />

        <Desk id="6" position={[11, 2]} />
        <Desk id="7" position={[13, 2]} />
        <Desk id="8" position={[11, 6]} />
        <Desk id="9" position={[13, 6]} />
        <Desk id="10" position={[11, 10]} />
        <Desk id="11" position={[13, 10]} />

        <Desk id="18" position={[11, 16]} />
        <Desk id="19" position={[13, 16]} />
        <Desk id="20" position={[11, 20]} />
        <Desk id="21" position={[13, 20]} />

        <Desk id="12" position={[36, 2]} />
        <Desk id="13" position={[38, 2]} />
        <Desk id="14" position={[36, 6]} />
        <Desk id="15" position={[38, 6]} />
        <Desk id="16" position={[36, 10]} />
        <Desk id="17" position={[38, 10]} />

        <DownstairsWest />
        <DownstairsEast />
        <DownstairsNorth />
        <Toilet id="downstairs-west" />
        <Toilet id="downstairs-north" label="Kitchen + Toilet" />
        <Entrance label="Front door" id="front-door" />
        <Entrance label="Back door" id="back-door" />
      </div>
    </div>
  )
}

export default FloorPlanLevel1;