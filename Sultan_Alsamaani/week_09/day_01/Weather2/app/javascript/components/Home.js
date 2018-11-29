import React from "react";
import Search from "./Search";
import Result from "./Result";

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
    this.search = this.search.bind(this);
  }
  search(term) {
    this.setState({ data: "Loading" });
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${term}&APPID=df7a288d5d6a0aa112250a2c58ac0b4a`
    )
      .then(r => r.json())
      .then(data => {
        this.setState({ data: data });
      });
  }
  render() {
    let result = null;
    if (this.state.data === null) {
      result = <h3>Search for something!</h3>;
    } else if (this.state.data === "Loading") {
      result = <h3>Loading...</h3>;
    } else {
      const name = this.state.data.name;
      const desc = this.state.data.weather[0].description;
      result = <Result name={name} desc={desc} />;
    }
    return (
      <div>
        <h1>Welcome to the Weather App</h1>
        <Search appSearch={this.search} />
        {result}
      </div>
    );
  }
}

export default App;
