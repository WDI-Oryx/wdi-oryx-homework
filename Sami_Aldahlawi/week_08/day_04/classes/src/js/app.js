import React from "react";
import ReactDOM from "react-dom";



class Nav extends React.Component{
    render(){
        return (<nav>This is the nav</nav>)
    }
}


class Hello extends React.Component{
    render(){
        return <h1>Hello World</h1>
    }
}


// ReactDOM.render(<Nav/>,document.querySelector("#app"));
ReactDOM.render(<Hello/>,document.querySelector("#app"));
// const el = <h1>Hello World</h1>;

// ReactDOM.render(el,document.querySelector("#app"));