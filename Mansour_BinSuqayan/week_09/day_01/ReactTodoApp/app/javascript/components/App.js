import React from "react"
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(){
    super();
    this.state = {todos: []};
    const appInstance = this;
    this.addTodo = this.addTodo.bind(appInstance);
  }
  addTodo(newTodo){
    const currentTodos = this.state.todos;
    currentTodos.unshift(newTodo);
    this.setState({
      todos: currentTodos
    });

  }
  render () {
    console.log(this.state);
    return (
      <div>
        <h1>Todo App</h1>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos}/>
      </div>

    );
  }
}

export default App
