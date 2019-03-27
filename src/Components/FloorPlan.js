import React, { Component } from 'react';
import Person from './Person';
import Table from './Table';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './FloorPlan.css';
import _ from 'lodash';
import { Link } from "react-router-dom";

class FloorPlan extends Component {
  constructor() {
    super();
    this.state = {
      floorPlan: {},
      numberOfTables: 5,
    }
    this.onDrop = this.onDrop.bind(this);
    this.onFloorPlanLoad = this.onFloorPlanLoad.bind(this);
  }

  onDrop(item) {
    this.setState(state => {
      let floorPlan = _.omitBy(state.floorPlan, i => i === item.item);
      floorPlan[item.id] = item.item;

      state.floorPlan = floorPlan;

      return state;
    })
  }

  renderTables() {
    const tables = []

    for (let index = 0; index < this.state.numberOfTables; index++) {
      tables.push(
        <div className="destination" key={`table-${index}`}>
          <Table
            id={index}
            floorPlan={this.state.floorPlan}
            onDrop={this.onDrop} />
        </div>
      )
    }

    return tables
  }

  renderPlanLoaders() {
    const plans = [
      { floorPlan: { 0: "🐸", 4: "🐼" } },
      { floorPlan: { 0: "🦊", 1: "🐼", 2: "🐸" } },
      { floorPlan: { 2: "🦊", 4: "🐼", 1: "🐸" } },
    ]

    return plans.map(
      (plan, index) => <button key={`plan${index}`} onClick={() => this.onFloorPlanLoad(plan)} >
        Load plan {index}
      </button>
    )
  }

  onFloorPlanLoad(plan) {
    this.setState(plan)
  }

  render() {
    return (
      <div className="draggable-floor-plan">
        <div className="App">
          <div className="source">
            <Person name="🦊 Matej" id="🦊" />
            <Person name="🐼 Bruce" id="🐼" />
            <Person name="🐸 Sam" id="🐸" />
          </div>
          {this.renderTables()}
        </div>
        <div className="planLoaders">
          {this.renderPlanLoaders()}
          <Link to="/level1">Floor Level 1</Link>
          {' '}<Link to="/level2">Floor Level 2</Link>
          {' '}<Link to="/api">API</Link>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(FloorPlan);