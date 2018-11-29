import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {searchTerm: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(s) {
    this.setState({
      searchTerm: s.target.value
    });
  }

  handleSubmit(f) {
    f.preventDefault();
    this.props.appSearch(this.state.searchTerm);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.searchTerm}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}


export default Search;