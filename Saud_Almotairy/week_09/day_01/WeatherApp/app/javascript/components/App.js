import React from "react";
import Search from "./Search";
import WeatherReport from "./WeatherReport";

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
    this.search = this.search.bind(this);
  }
  search(term) {
    this.setState({
      data: "Loading"
    });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${term}&APPID=376d590e88586c474a1aa9370e3bcaeb`
    )
      .then(r => r.json())
      .then(data => {
        this.setState({ data: data });
        console.log(data);
      });
  }
  render() {
    let weatherReport = null;
    if (this.state.data === null) {
      weatherReport = <h3>Search for Location!</h3>;
    } else if (this.state.data === "Loading") {
      weatherReport = <h3>Loading...</h3>;
    } else {
      const place = this.state.data.name;
      const humidity = this.state.data.main.humidity;
      const wind = this.state.data.wind.speed;
      const pressure = this.state.data.main.pressure;
      const clouds = this.state.data.clouds.all;

      weatherReport = (
        <WeatherReport
          place={place}
          humidity={humidity}
          wind={wind}
          pressure={pressure}
          clouds={clouds}
        />
      );
    }
    return (
      <div>
        <h1> Welcome to Weather App </h1>
        <Search appSearch={this.search} />

        {weatherReport}
      </div>
    );
  }
}

export default App;
