import React from "react"
import PropTypes from "prop-types"
class WeatherResult extends React.Component {
  constructor(){
    super();
  }
  
  
  
  
  
  render () {
    return (
      <div>
        <h4>{this.props.country}</h4>
        <p>{this.props.weather}</p>
      </div>
    );
  }
}

export default WeatherResult
