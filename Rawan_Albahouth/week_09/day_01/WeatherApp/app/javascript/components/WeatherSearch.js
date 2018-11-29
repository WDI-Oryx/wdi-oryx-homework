import React from "react";

class WeatherSearch extends React.Component {
  constructor() {
    super();
    this.state = { searchWord: "" };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.search(this.state.searchWord);
  }

  handleSearch() {
    this.setState({
      searchWord: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleSearch}
            value={this.state.searchWord}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default WeatherSearch;
