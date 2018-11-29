import React from "react"

class Search extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.appSearch(this.state.searchTerm);
    //  this.state.newTodo);
  }
  handelChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return <form onSubmit={this.handleSubmit} >
      <input type="text" value={this.state.searchTerm} onChange={this.handelChange} />
      <input type="submit" value="Search" />
    </form>;
  }
}

export default Search
