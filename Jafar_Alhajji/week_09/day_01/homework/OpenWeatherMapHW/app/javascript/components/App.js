import React from "react";
import SearchForm from "./SearchForm";
import WeatherResult from "./WeatherResult";
// import PropTypes from "prop-types"
class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
    this.search = this.search.bind(this);
  }
  search(term) {
    console.log(term);
    const apiKey = "5a67a9d97707ba83a8bcd888d3dc4865";
    const method = "GET";
    const dataType = "JSON";
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${term}&APPID=${apiKey}`;

    fetch(URL, { method: method, dataType: dataType })
      .then(r => r.json())
      .then(data =>
        this.setState({
          data: data
        })
      );
  }
  render() {
    // debugger;
    if (this.state.data === null) {
      return (
        <div>
          <h1>OpenWeatherMap</h1>
          <SearchForm Search={this.search} />
          {/* <WeatherResult w={this.state.data} /> */}
          <h2>loading</h2>
        </div>
      );
    } else {
      return (
        <div>
          <h1>OpenWeatherMap</h1>
          <SearchForm Search={this.search} />
          <WeatherResult w={this.state.data} />
        </div>
      );
    }
  }
}

export default App;
