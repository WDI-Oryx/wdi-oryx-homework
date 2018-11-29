import React from "react"

class WeatherResult extends React.Component {
  render() {
    const { name, temp, weather } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <h4>{weather}</h4>
        <p>{temp}</p>
      </div>
    );
  }
}

export default WeatherResult