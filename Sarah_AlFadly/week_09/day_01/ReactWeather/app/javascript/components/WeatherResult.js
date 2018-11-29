import React from "react"
// import PropTypes from "prop-types"
class WeatherResult extends React.Component {
  render () {
    const { main, description } = this.props;
    return (
      // <React.Fragment>
      // </React.Fragment>
      <div>
        <h4>{main}</h4>
        <p>{description}</p>
      </div>
    );
  }
}

export default WeatherResult
