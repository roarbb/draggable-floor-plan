import React from 'react';
import './FloorPlanTemplate.css';
import Desk from './Desk';
import Stairs from './Stairs';
import StandUpPod from './StandUpPod';
import Kitchen from './Kitchen';
import Toilet from './Toilet';
import Printer from './Printer';
import { inject, observer } from "mobx-react";

class FloorPlanLevel2 extends React.Component {
    render() {
        const deskElements = this.props.firstFloorList.map(desk => {
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
                    <div className="hole" />
                    <Stairs />
                    <Printer className="printer-icon-upstaire" />
                    <StandUpPod />
                    <Kitchen />
                    <Toilet />
                    {deskElements}
                </div>
            </div>
        )
    }
}

export default inject(rootStore => {
    return {
        employeesIdKeyMap: rootStore.employeeStore.employeesIdKeyMap,
        firstFloorList: rootStore.desksStore.firstFloorList,
    }
})(observer(FloorPlanLevel2));

