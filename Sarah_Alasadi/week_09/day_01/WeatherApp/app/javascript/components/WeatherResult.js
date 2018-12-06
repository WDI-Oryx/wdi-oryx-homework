import React from "react"

class WeatherResult extends React.Component {
  render() {
    const { country, name, description } = this.props;

    return (
      <div>
        <h4>{country}</h4>

        <p>{name}</p>
        <p>{description}</p>
      </div >
    );
  }
}

export default WeatherResult;