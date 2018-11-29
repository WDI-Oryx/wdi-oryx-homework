import React from "react"
import Search from "./Search";
import WeatherResult from "./WeatherResult";

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
    this.search = this.search.bind(this);
  }

  search(term) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${term}&APPID=e9c5d585f70eeb048c6f3c08fa83a229
`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
      });
  }

  render() {
    if (this.state.data === null) {
      return (
        <div>
          <h1>Welcome to the Weather App</h1>
          <Search appSearch={this.search} />
          <h3>Loading...</h3>
        </div>
      );
    }

    const name = this.state.data.name;
    const temp = this.state.data.main.temp;
    const weather = this.state.data.weather.description;

    return (
      <div>
        <h1>Welcome to the Weather App</h1>
        <Search appSearch={this.search} />
        <WeatherResult
          name={name}
          weather={weather}
          temp={temp}
           />
      </div>
    );
  }
}

export default App
