import React from "react"

class Result extends React.Component {

  render () {
    const {name,} = this.props.weather;
    const {temp,humidity} = this.props.weather.main;
    const {main,description} = this.props.weather.weather[0];
    const {speed} = this.props.weather.wind;
     return (
      <div>
      <h1>Result</h1>
      <p>City: {name}</p>
      <p>Temp: {temp}</p>
      <p>Humidity: {humidity}</p>
      <p>Main: {main}</p>
      <p>Description: {description}</p>
      <p>Speed of Wind: {speed}</p>
      </div>
    );
  }
}

export default Result
