import React from "react";
import Search from "./Search";
import MovieResult from "./MovieResult";

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
    this.search = this.search.bind(this);
  }
  search(term) {
    this.setState({
      data: "Loading..."
    });
    fetch(`https://omdbapi.com/?apikey=b51c8ed1&t=${term}`)
      .then(r => r.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
  }
  render() {
    if (this.state.data === null) {
      return (
        <div>
          <h1>Welcome to the Movie App</h1>
          <Search appSearch={this.search} />
          <h3>Searching for something!</h3>
        </div>
      );
    }
    const {Title, Poster, Plot} = this.state.data;
    return (
      <div>
        <h1>Welcome to the Movie App</h1>
        <Search appSearch={this.search} />
        <MovieResult 
        title={Title}
        poster={Poster}
        plot={Plot}
        />
      </div>
    );
  }
}

export default App;