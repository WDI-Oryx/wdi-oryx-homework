import React from "react";
import WeatherForm from "./WeatherForm";
import WeatherResult from "./WeatherResult";
class App extends React.Component {
  constructor() {
    super();
    this.state = { data: "" };
    this.search = this.search.bind(this);
  }
  search(location) {
    // console.log(location);
    const apiKey = "0b1268add274bdff99d8256c0cbaae09";
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log();
        this.setState({
          data: {
            name: data.name,
            temp: data.main.temp,
            weather: data.weather[0].description
          }
        });
      });
  }

  render() {
    // console.log(this.state.data.name);

    // console.log(this.state.data.weather);
    const { name, temp, weather } = this.state.data;
    return (
      <div>
        <h1>Welcome to Weather app</h1>
        <WeatherForm appSearch={this.search} />
        {/* <WeatherResult result={this.state.data} /> */}
        <WeatherResult name={name} temp={temp} weather={weather} />
      </div>
    );
  }
}

export default App;
