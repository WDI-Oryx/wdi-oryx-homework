import React from 'react';

class WeatherDisplay extends React.Component {
	render() {
		const { Name, Country, Temp, Weather, Description } = this.props;
		return (
			<div>
				<h1>
					{Name}, {Country}
				</h1>
				<p>Temperature: {Temp} F</p>
				<p>Weather: {Weather} </p>
				<p>Description: {Description} </p>
			</div>
		);
	}
}

export default WeatherDisplay;
