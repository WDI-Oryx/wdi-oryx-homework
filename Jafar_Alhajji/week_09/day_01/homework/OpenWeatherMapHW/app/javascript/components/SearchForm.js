import React from "react";
import PropTypes from "prop-types";
class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.Search(this.state.searchTerm);
  }

  render() {
    console.log(this.state.searchTerm);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchForm;
