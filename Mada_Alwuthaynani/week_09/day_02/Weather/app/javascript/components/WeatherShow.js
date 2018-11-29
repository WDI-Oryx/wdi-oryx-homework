import React from "react";

class WeatherShow extends React.Component {
  render() {
   
    return (
      <div>
        <h1>{this.props.weather}</h1>
      
      </div>
    );
  }
}

export default WeatherShow;