import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  } // end constructor

  delete(key) {
    this.props.delete(key);
  } // end delete 

  createTasks(item) {
    return <li onClick={() => this.delete(item.key)} 
                key={item.key}>{item.text}</li>
  }
  
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    
    return (
      <ul className="theList">
        <FlipMove duration={650} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};

export default TodoItems;