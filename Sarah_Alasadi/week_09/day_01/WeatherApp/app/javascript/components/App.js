import React from "react";
import Search from "./Search";
import WeatherResult from "./WeatherResult";

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
    this.search = this.search.bind(this);

  }

  search(term) {
    this.setState({
      data: "Loading...."
    });


    fetch(`http://api.openweathermap.org/data/2.5/weather?q=riyadh&APPID=1a9fa2ced90d5c268991a4cb7c1f3c91=${term}`)

      .then(r => r.json())
      .then(data => {
        // console.log(data);
        this.setState({
          data: data

        });
      });

    // console.log(term);

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
    const { country, name, description } = this.state.data;
    return (
      <div>
        <h1>Welcome to the Weather App</h1>
        <Search appSearch={this.search} />
        <WeatherResult title={country} poster={name} plot={description} />
      </div>
    );
  }
}

export default App;