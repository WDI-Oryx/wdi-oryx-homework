import React from "react";
class WeatherResult extends React.Component {
  render() {
    const { name, temp, weather } = this.props;
    return (
      <div>
        <h2>Weather result</h2>
        <h4>{name}</h4>
        <h4>{temp}</h4>
        <h4>{weather}</h4>
      </div>
    );
  }
}

export default WeatherResult;
