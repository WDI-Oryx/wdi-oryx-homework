import React from "react";
import PropTypes from "prop-types";
class Search extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.appSearch(this.state.searchTerm);
  }
  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Search;
