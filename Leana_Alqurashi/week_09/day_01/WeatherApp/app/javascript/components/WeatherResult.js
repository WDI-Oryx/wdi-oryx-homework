import React from "react";
import PropTypes from "prop-types";
class WeatherResult extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.city}</h4>
        <p>{this.props.description}</p>
        <p>tempreture: {this.props.temp}</p>
      </div>
    );
  }
}

export default WeatherResult;
