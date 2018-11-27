import React from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
    this.search = this.search.bind(this);
  }

  search(term) {
    fetch(
      `api.openweathermap.org/data/2.5/weather?q=${term}&APPID=e36837de9b3cb9a17e5d4d35fa20707a`
    )
      .then(respo => respo.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
  }

  render() {
    const { coord, weather, sys } = this.state.data;
    return (
      <div>
        <h1> Current Weather </h1>
        <Search appSearch={this.search} />
        <SearchResult coord={coord} weather={weather} sys={sys} />
      </div>
    );
  }
}

export default App;
