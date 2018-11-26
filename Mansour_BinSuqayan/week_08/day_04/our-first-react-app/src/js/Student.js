import React from "react";

class Student extends React.Component {
    constructor(){
        super();
        this.handleMouseEnter =
        this.handleMouseEnter.bind(this);
    }
    handleMouseEnter(){
        console.log("The mouse entred the component");
    }
    handleClick(){
        console.log("Hello")
    }
    handleDoubleClick(){
        console.log(this.props.name);
    }
    handleContextMenu(){
        console.log("someone was right-clicked");
    }
    render() {
        return (

          <li
          onDoubleClick={this.handleDoubleClick.bind(this)}
          onContextMenu={this.handleContextMenu.bind(this)}
          onDoubleClick={this.handleDoubleClick.bind(this)}
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onClick={() => this.handleClick()}>
            {this.props.name}
          </li>
        );
      }
    }

// ReactDOM.render(
//    ,
//     document.querySelector("#app")
//   );
  


export default Student;