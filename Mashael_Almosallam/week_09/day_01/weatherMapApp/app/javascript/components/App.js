import React from "react"
import Search from "./Search";
import WeatherResult from "./WeatherResult";
class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null }
    this.search = this.search.bind(this);
  }
  search(term) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${term}&APPID=1f396e6e45567b217fec5a2219958e33`).then((r) => r.json()).then(data => {
      this.setState({
        data: data
      });
    });
  }
  render() {
    let result = null;
    if (this.state.data === null) {
      result = <h4>What's your current location?</h4>
    } else {
      const temp = this.state.data.main.temp;
      const weather = this.state.data.weather[0].main;
      const name = this.state.data.name;
      result = <WeatherResult weather={weather} temp={temp} name={name} />;
    }
    return (
      <div>
        <h1>The weather in your country is...</h1>
        <Search appSearch={this.search} />
        {result}
      </div>
    );
  }
}

export default App
