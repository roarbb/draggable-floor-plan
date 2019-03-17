import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import './Person.css';

class Person extends Component{
  render(){
    const { name, connectDragSource } = this.props;
    return connectDragSource(
      <div className="square">
        {name}
      </div>
    )
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource()
  };
}

const cardSource = {
    beginDrag(props, monitor, component) {
        const item = { id: props.id };
        return item;
    }
};

export default DragSource("SOURCE", cardSource, collect)(Person);