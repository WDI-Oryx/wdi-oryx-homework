import React from "react";

class ClickCounter extends React.Component {
    constructor(){
        super();
        this.state = {clicks: 0};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        const clicks = this.state.clicks + 1;
        this.setState({
            clicks: clicks
        });
    }

    decrement(){
        const decClicks = this.state.clicks - 1;
      
        if(decClicks >= 0){
            this.setState({
                clicks: decClicks
            });
        }
       
    }
    render(){
        return <div>
            <h1 onClick={this.increment}>Number of clicks: {this.state.clicks}</h1>
            <button onClick={this.decrement}>Decrement</button>

            </div>
    }
}

export default ClickCounter;