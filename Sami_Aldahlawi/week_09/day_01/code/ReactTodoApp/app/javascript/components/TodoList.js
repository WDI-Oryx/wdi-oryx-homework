import React from "react"
import Todo from "./Todo";
class TodoList extends React.Component {
  render () {
    const allTodos = this.props.todos.map(function (t) {
      return <Todo content={t}/>
    });
    console.log(allTodos);
   
    return (
      <div>
        <h4>All Todos</h4>
        <ul>
        {allTodos}
        </ul>
      </div>
    );
  }
}

export default TodoList



// First 
// Focussed
// Independent
// Reusable
// Small
// Testable
