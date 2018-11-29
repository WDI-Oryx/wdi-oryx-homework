import React from "react";
import WeatherSearch from "./WeatherSearch";
import Result from "./Result";

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
    this.weather = this.weather.bind(this);
  }

  weather(location) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=f4dc4dd0a469166c1a5ea94e95201f01`
    )
      .then(r => r.json())
      .then(data => {
        this.setState({ data: data });
        console.log(this.state.data);
      });
  }

  render() {
    let weatherRes = null;
    if (this.state.data === null) {
      weatherRes = <h3>Location you looking for its weather!</h3>;
    } else {
      const { name } = this.state.data;
      const weather = this.state.data.weather[0].description;
      // const {  } = this.state.data;
      weatherRes = <Result location1={name} desc={weather} />;
    }
    return (
      <div>
        <h1> Weather App </h1>
        <WeatherSearch search={this.weather} />
        {weatherRes}
      </div>
    );
  }
}

export default App;
