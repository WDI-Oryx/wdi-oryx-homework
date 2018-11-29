import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput() {
    this.setState({
      searchTerm: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefult();
    const { searchTerm } = this.state;
    console.log("Should render the post component", searchTerm);
  }
  render() {
    return (
      <div>
        <h2>Search for Post</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Post</label>
          <input
            type="text"
            placeholder="Post"
            className="u-full-width"
            id="post"
            onChange={this.handleInput}
            value={this.state.searchTerm}
          />
          <input
            type="submit"
            value={`Search for ${this.state.searchTerm}`}
            className="button-primary"
          />
        </form>
      </div>
    );
  }
}

export default Search;
