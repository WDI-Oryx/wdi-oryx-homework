import React from "react"
import PropTypes from "prop-types"
class Search extends React.Component {
  constructor(){
    super();
    this.state = { searchTerm: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.appSearch(this.state.searchTerm);
  }

  
  
  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text"
          onChange={this.handleChange}
          valuev={this.state.searchTerm} />

        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Search
