import React from "react"
import PropTypes from "prop-types"
class WeatherResult extends React.Component {
  constructor() {
    super();
  }





  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <p>{this.props.temp}</p>
        <p>{this.props.des}</p>
      </div>
    );
  }
}

export default WeatherResult
