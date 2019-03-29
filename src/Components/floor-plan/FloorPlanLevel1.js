import React from 'react';
import './FloorPlanTemplate.css';
import Desk from './Desk';
import Stairs from './Stairs';
import DownstairsWest from './DownstairsWest';
import DownstairsEast from './DownstairsEast';
import DownstairsNorth from './DownstairsNorth';
import Arcade from './Arcade';
import Printer from './Printer';
import Toilet from './Toilet';
import Entrance from './Entrance';
import {inject, observer} from "mobx-react";

class FloorPlanLevel1 extends React.Component {
  render() {
    const deskElements = this.props.groundFloorList.map(desk => {
        return <Desk key={desk.deskId}
              id={desk.deskId}
              position={desk.position}
              horizontal={desk.horizontal}
              employees={desk.employeeIds.map((id) => this.props.employeesIdKeyMap[id])}
              markedDesks={this.props.markedDesks}
        />
    });

      return (
          <div className="grid">
              <div className="floor">
                  <Stairs inverted={true} />
                  {deskElements}
                  <DownstairsWest />
                  <DownstairsEast />
                  <DownstairsNorth />
                  <Arcade />
                  <Printer className="printer-icon-downstaires1"/>
                  <Printer className="printer-icon-downstaires2"/>
                  <Toilet id="downstairs-west" />
                  <Toilet id="downstairs-north" label="Kitchen + Toilet" />
                  <Entrance label="Front door" id="front-door" />
                  <Entrance label="Back door" id="back-door" />
              </div>
          </div>
      )
  }
}

export default inject(rootStore => {
    return {
        employeesIdKeyMap: rootStore.employeeStore.employeesIdKeyMap,
        groundFloorList: rootStore.desksStore.groundFloorList
    }
})(observer(FloorPlanLevel1));
