import React from "react"

class Todo extends React.Component {
  render () {
  
    return (
     <div>
       <li>{this.props.content}</li>
     </div>
    );
  }
}

export default Todo
