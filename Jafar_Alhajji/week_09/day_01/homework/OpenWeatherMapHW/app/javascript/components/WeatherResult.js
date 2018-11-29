import React from "react";
import PropTypes from "prop-types";
class WeatherResult extends React.Component {
  render() {
    // if (this.props.w != null) {
    //   const main = this.props.w.main;
    //   // humidity;
    //   const weather = this.props.w.weather;
    //   const s = weather.forEach(element => {
    //     element.main;
    //   });
    //   console.log(main);

    //   console.log(s);
    // }
    const { weather, main } = this.props.w;
    // weather = weather[0];
    console.log(weather[0].description);
    console.log(main);
    return (
      <div>
        <p>City Name: {this.props.w.name}</p>
        <p>description: {weather[0].description}</p>
        <p>humidity: {main.humidity}</p>
        <p>pressure: {main.pressure}</p>
      </div>
    );
  }
}

export default WeatherResult;
