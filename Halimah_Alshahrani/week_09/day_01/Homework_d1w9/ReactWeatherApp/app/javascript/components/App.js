import React from "react";
import Search from "./Search";
import WeatherRes from "./WeatherRes";


class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
    this.search = this.search.bind(this);
  }
  search(term) {
    this.setState({ data: "Loading" });
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${term}&APPID=617ae074e77a9119d1e17524c8f3935b`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
      });
  }
  render() {
    let weatherRes = null;
    if (this.state.data === null) {
    } else if (this.state.data === "Loading") {
      weatherRes = <h3>Loading...</h3>;
    } else {
      const temp = this.state.data.main.temp
      const city = this.state.data.name
      const humidity = this.state.data.main.humidity
      const country = this.state.data.sys.country
     
      weatherRes = <WeatherRes temp={temp} city={city} humidity={humidity} country={country} />;
    }
    return (
      <div>
        <h1> How is the weather outside? </h1>
        <Search appSearch={this.search} />
        {weatherRes}
      </div>
    );
  }
}

export default App;