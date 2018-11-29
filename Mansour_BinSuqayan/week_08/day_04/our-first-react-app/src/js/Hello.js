import React from "react";


class Hello extends React.Component{
    render(){
        
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <h2>You are from {this.props.hometown}</h2>
            </div>
        );
    }
}


export default Hello;