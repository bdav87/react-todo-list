import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
 
  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
      return (
        <TodoItem key={todo.title} todo={todo} />
      );
    });
  }
    //console.log(this.props);
    return (
      <div className="Todos">
        <h3>Todo List</h3>
        <ul>
        {todoItems}
        </ul>
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array
}

export default Todos;
