import React from 'react';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';

class App extends React.Component {
	constructor() {
		super();
		this.state = { data: null };
		this.search = this.search.bind(this);
	}

	search(term) {
		this.setState({ data: 'loading' });
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${term}&APPID=4636221e3071be394379a5fa2cf521d8`)
			.then((r) => r.json())
			.then((data) => {
				this.setState({ data: data });
			});
	}
	render() {
		let weatherSearch = null;
		if (this.state.data === null) {
			weatherSearch = <h3>Enter the city to see the weather</h3>;
		} else if (this.state.data === 'loading') {
			weatherSearch = <h3>Loading...</h3>;
		} else {
			const { name } = this.state.data;
			const { temp } = this.state.data.main;
			const { country } = this.state.data.sys;
			const { main, description } = this.state.data.weather[0];
			weatherSearch = (
				<WeatherDisplay Name={name} Country={country} Temp={temp} Weather={main} Description={description} />
			);
		}
		return (
			<div>
				<h1>Weather Application</h1>
				<Search appSearch={this.search} />
				{weatherSearch}
			</div>
		);
	}
}

export default App;
