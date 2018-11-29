import React from "react"
import Search from "./Search"
import WeatherResult from "./WeatherResult"

// import PropTypes from "prop-types"
class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
    this.search = this.search.bind(this);
  }

  search(location) {
    // console.log(term);

    // Make an AJAX Request to the OMDB API
    // GET
    // JSON
    // Path:
    // Parameters:
    // When the data comes back, change the state of the app
    // The App will re-render because of that 
    ///////////
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=05f06386e664b3450cc55c8663029dfe`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(this);
      this.setState({
        data: data
      });
    });
  }

  render () {
    if (this.state.data === null) {
      return (
        <div>
          <h1>Welcome to the Weather App</h1>
          <Search appSearch={this.search} />
          <h3>Search for something!</h3>
        </div>
      );
    }
    const {weather} = this.state.data;
    return (
      // <React.Fragment>
      // </React.Fragment>
      <div>
        <h1>Welcome to the Weather App</h1>
        <Search appSearch={this.search}/>
        <WeatherResult main={weather[0].main} description={weather[0].description}/>
      </div>
    );
  }
}

export default App
