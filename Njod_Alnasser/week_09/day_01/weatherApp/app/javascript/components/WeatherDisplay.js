import React from "react";

class WeatherDisplay extends React.Component {
render() {

  return (
    <div>
      <h1>{this.props.weather}</h1>
			<h1>{this.props.country}</h1>
    </div>
  );
}
}

export default WeatherDisplay
