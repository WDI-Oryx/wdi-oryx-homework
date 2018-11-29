import React from "react"
// import PropTypes from "prop-types"
class Search extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // e.preventDefault();
    // const search = e.target.value;
    // console.log(search);
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.appSearch(this.state.searchTerm);
  }

  render () {
    // console.log(this.state.searchTerm);
    return (
      // <React.Fragment>
      // </React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.searchTerm}/>
        <input type="submit" value="Search"/>
      </form>
    );
  }
}

export default Search
