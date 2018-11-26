import React from "react"

class WeatherResult extends React.Component {
  render() {
    const { weather, temp, name } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <h4>{weather}</h4>
        <h4>{temp}</h4>
      </div>
    );
  }
}

export default WeatherResult
