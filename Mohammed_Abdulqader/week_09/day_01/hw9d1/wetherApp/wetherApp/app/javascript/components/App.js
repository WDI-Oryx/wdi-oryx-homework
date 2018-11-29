import React from "react";
import Search from "./Search";
import WetherSearch from "./WetherSearch";
class App extends React.Component {
  constructor() {
    super();
    this.state = {data: null};
    this.search = this.search.bind(this);
  }

  search(t) {
    this.setState({
      data: "Loading"
    });
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${t}&APPID=c1ea74f2f2daa1adcf536a812814d1d0`
    )
      .then(r => r.json())
      .then(data => {
        this.setState({data: data});
      });
  }
  render() {
    let wetherSearch = null;
    if (this.state.data === null) {
      wetherSearch = <h3>Search for wether</h3>;
    } else if (this.state.data === "Loading") {
      wetherSearch = <h3>Loading...</h3>;
    } else {
      const weather = this.state.data.weather[0].main;
      const weatherDescription = this.state.data.weather[0].description;
      const weathericon = this.state.data.weather[0].icon;

      wetherSearch = (
        <WetherSearch
          weather={weather}
          description={weatherDescription}
          weathericon={weathericon}
        />
      );
    }
    return (
      <div>
        <h1>Welcome to the Wether App</h1>
        <Search appSearch={this.search} />
        {wetherSearch}
      </div>
    );
  }
}

export default App;
