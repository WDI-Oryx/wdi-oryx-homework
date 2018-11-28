import React from "react"

class WeatherResult extends React.Component {
  render () {
    const { name, weather, temp } = this.props;
    return (
     <div>
       <h4>Location: {name}</h4>
       {/* <p>Weather: {weather}</p>
       <p>Tempreture: {temp}</p> */}
     </div>
    );
  }
}

export default WeatherResult
