import React from "react"
import PropTypes from "prop-types"
import Search from "./Search";
import WeatherResult from "./WeatherResult";



class App extends React.Component {

  constructor() {
    super();
    this.state = { data: null };
    this.search = this.search.bind(this);
  }

  search(term) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${term}&APPID=401e0cd27bd006446f78b068ab41d26a`)
      //https://openweathermap.org/?apikey=401e0cd27bd006446f78b068ab41d26a=${term}`,{mode:'no-cors'})
      .then(r => r.json())
      .then(data => {
        this.setState({ data: data });
        console.log(this.state.data.name);
        console.log(this.state.data.main.temp);
        console.log(this.state.data.weather[0].description);
      });
  }





  render() {
    if (this.state.data === null) {
      return (
        <div>
          <h1>Welcome to the Weather App</h1>
          <Search appSearch={this.search} />
          <h3> Enter a country</h3>
        </div>
      )
    }
    // const { country, weather } = this.state.data;
    return (
      <div>
        <h1>Welcome to the Weather App</h1>
        <Search appSearch={this.search} />
        <WeatherResult name={this.state.data.name} temp={this.state.data.main.temp} des={this.state.data.weather[0].description} />
      </div>
    );

  }
}

export default App;
