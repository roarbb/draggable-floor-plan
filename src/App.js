import React, { Component } from 'react';
import Person from './Components/Person';
import Table from './Components/Table';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './App.css';
import _ from 'lodash';

class FloorPlan extends Component {
  constructor() {
    super();
    this.state = {
      floorPlan: {},
      numberOfTables: 5,
    }
    this.onDrop = this.onDrop.bind(this);
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

  render() {
    return (
      <div className="App">
        <div className="source">
          <Person name="🦊 Matej" id="🦊" />
          <Person name="🐼 Bruce" id="🐼" />
          <Person name="🐸 Sam" id="🐸" />
        </div>
        {this.renderTables()}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(FloorPlan);