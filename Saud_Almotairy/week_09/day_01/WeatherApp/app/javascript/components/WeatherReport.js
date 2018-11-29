import React from "react";
class WeatherReport extends React.Component {
  render() {
    const { place, clouds, humidity, wind, pressure } = this.props;
    console.log(this.props);
    return (
      <div>
        <h4> Weather Report for {place}</h4>
        <p>Clouds: {clouds}</p>
        <p>humidity: {humidity}</p>
        <p>Wind: {wind}</p>
        <p>Pressure: {pressure}</p>
      </div>
    );
  }
}

export default WeatherReport;
