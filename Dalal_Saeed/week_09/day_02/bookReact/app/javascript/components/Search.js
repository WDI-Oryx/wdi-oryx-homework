import React from "react"

class Search extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(e) {
    this,
      this.setState({
        searchTerm: e.target.value
      });
    e.preventDefault();
    console.log(this.state.searchTerm);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { searchTerm } = this.state; // short for //const searchTerm = this.state.searchTerm;
    const hashURL = `/books/${searchTerm}`;
    this.props.history.push(hashURL);

    console.log(searchTerm);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Search for a Book</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="booktitle">booktitle</label>
          <input
            type="text"
            placeholder="booktitle"
            className="u-full-width"
            id="booktitle"
            value={this.state.searchTerm}
            onChange={this.handleUserInput}
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



export default Search
