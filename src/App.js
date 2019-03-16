import React, { Component } from 'react';
import Source from './Components/Source';
import Target from './Components/Target';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './App.css';
import _ from 'lodash';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      droppedItem: {},
      numberOfTables: 5,
    }
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(item) {
    this.setState(state => {
      let droppedItem = _.omitBy(state.droppedItem, i => i === item.item);
      droppedItem[item.id] = item.item;

      state.droppedItem = droppedItem;

      return state;
    })
  }

  renderTables() {
    const tables = []

    for (let index = 0; index < this.state.numberOfTables; index++) {
      tables.push(
        <div className="destination" key={`table-${index}`}>
          <Target
            id={index}
            droppedItem={this.state.droppedItem}
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
          <Source name="🦊 Matej" id="🦊" />
          <Source name="🐼 Bruce" id="🐼" />
          <Source name="🐸 Sam" id="🐸" />
        </div>
        {this.renderTables()}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);