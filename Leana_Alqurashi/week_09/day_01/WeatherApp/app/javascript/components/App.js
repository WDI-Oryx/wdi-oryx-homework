import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import WeatherResult from "./WeatherResult";
class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
    this.search = this.search.bind(this);
  }
  search(term) {
    console.log(term);
    const link = `http://api.openweathermap.org/data/2.5/weather?q=${term}&APPID=9b4754726f48a39aa4e26925537eba0a`;
    // Apikey : 9b4754726f48a39aa4e26925537eba0a
    fetch(link)
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
        console.log(this.state.data);
        console.log(this.state.data.weather[0].description);
        console.log(this.state.data.main.temp);
      });
  }
  render() {
    let result = null;
    if (this.state.data == null) {
      result = <p>Find the weather in a city</p>;
    } else {
      const data = this.state.data;
      const name = data.name;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      result = (
        <WeatherResult city={name} description={description} temp={temp} />
      );
    }
    return (
      <div>
        <h1>Weather App</h1>
        <Search appSearch={this.search} />
        {result}
      </div>
    );
  }
}

export default App;
