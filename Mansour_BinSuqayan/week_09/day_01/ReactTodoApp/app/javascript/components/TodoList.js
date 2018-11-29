import React from "react"
import Todo from "./Todo";

class TodoList extends React.Component {
  render () {
      const todoItems = this.props.todos.map(function(t){
        return <Todo content={t}/>;
      });
    // console.log(this.props);
    return (
      <div>
        <h4>All Todos</h4>
        <ul>
          {todoItems}
        </ul>
      </div>

    );
  }
}

export default TodoList

