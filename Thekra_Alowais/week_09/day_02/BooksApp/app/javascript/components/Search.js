import React from "react";
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserInput(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { searchTerm } = this.state;
    // console.log("handleCubmit", searchTerm);
    const hashURL = `/books/${searchTerm}`;
    this.props.history.push(hashURL);
  }
  render() {
    // console.log(this.state.searchTerm);

    return (
      <div>
        <h2>Search for a Book</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            id="bookname"
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleUserInput}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Search;
