import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(ev) {
    console.log(this.state.searchTerm);
    this.setState({
      searchTerm: ev.target.value
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.appSearch(this.state.searchTerm);
  }

  render() {
    return (
      <form>
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
