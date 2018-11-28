import React from "react"
 
class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {      
      newTodo: ""
    };        //mutable
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      newTodo: event.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log("The form was submitted", this.state);
    this.props.addTodo(this.state.newTodo);
  }

  render () {
    return (
     <form onSubmit={this.handleSubmit}>
       <input type="text"
        value = {this.state.newTodo} 
        onChange={this.handleChange}
        />

       <input type="submit" value="Add Todo"/>
     </form>
    );
  }
}

export default TodoForm
