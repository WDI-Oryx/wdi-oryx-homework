import React from "react";
import Search from "./Search";
import Show from "./Show";
class App extends React.Component {
  //api.openweathermap.org/data/2.5/weather?q=riyadh&APPID=487801279ef579c040789612d3d29ea6
  constructor() {
    super();
    this.state = { data: null };
    this.search = this.search.bind(this);
  }
  search(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=487801279ef579c040789612d3d29ea6`
    )
      .then(r => r.json())
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
    return (
      <div>
        <h1>Welcome to the Weather App</h1>
        <Search appSearch={this.search} />

        <Show weather={this.state.data.main.temp} />
      </div>
    );
  }
}

export default App;
