import React from "react";
import WeatherInfo from "./WeatherInfo";
import SelectCity from "./SelectCity";

class App extends React.Component {
	constructor() {
		super();
		this.state = { data: null };
		this.getWeatherInfo("Riyadh");
	}
	getWeatherInfo = city => {
		// this.setState({ data: null });
		// Example of URL:
		// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=eba68b5f6c549e09a24ce90322da01fc
		const baseURL = "http://api.openweathermap.org/data/2.5/weather";
		const apiKey = "eba68b5f6c549e09a24ce90322da01fc";
		const params = `?q=${city}&appid=${apiKey}`;
		const httpOptions = {
			method: "GET",
			dataType: "JSON"
		};
		const url = baseURL + params;
		fetch(url, httpOptions)
			.then(r => r.json())
			.then(data => {
				// console.log(data);
				this.setState({
					data: data
				});
			});
	};
	render() {
		// this.getWeatherInfo();
		if (this.state.data === null) {
			return (
				<div>
					<h1>React Weather App</h1>
					<h3>Loading...</h3>
				</div>
			);
		}
		return (
			<div>
				<h1>React Weather App</h1>
				<SelectCity getWeatherOf={this.getWeatherInfo} />
				<WeatherInfo weatherData={this.state.data} />
			</div>
		);
	}
}

export default App;
