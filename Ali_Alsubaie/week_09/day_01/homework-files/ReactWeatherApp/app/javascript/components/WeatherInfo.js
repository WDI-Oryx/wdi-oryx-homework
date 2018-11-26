import React from "react";

class WeatherInfo extends React.Component {
	constructor() {
		super();
	}
	render() {
		const data = this.props.weatherData;
		// console.log(data);
		return (
			<div>
				<h3>Weather Information</h3>
				<p>City: {data.name}</p>
				<p>Temp: {data.main.temp}</p>
				<p>humidity: {data.main.humidity}</p>
				<p>Wind Speed: {data.wind.speed}</p>
			</div>
		);
	}
}

export default WeatherInfo;
