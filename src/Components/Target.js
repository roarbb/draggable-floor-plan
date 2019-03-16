import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import './target.css';

class Target extends Component{
    render(){
        const { isOver, canDrop, connectDropTarget, droppedItem, id } = this.props;
        let className = "";
        if(isOver && canDrop){
            className = 'green';
        }else if(!isOver && canDrop){
            className = 'yellow';
        }else if(isOver && !canDrop){
            className = 'red'
        }

        const name = droppedItem[id] === undefined ? '❖' : droppedItem[id]

        return connectDropTarget(
            <div className={`target ${className}`}>
                { name }
            </div>
        )
    }
}

const spec = {
    drop(props, monitor, component){
        const item = monitor.getItem()
        props.onDrop({item: item.id, id: props.id})
    }
}
function collect(connect, monitor) {
  return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop()
  };
}

export default DropTarget("SOURCE", spec, collect)(Target);