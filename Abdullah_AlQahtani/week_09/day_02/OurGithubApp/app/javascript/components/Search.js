import React from "react"

class Search extends React.Component {
  constructor(){
    super();
    this.state = { searchTerm: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
    
  }
  handleSubmit(e) {
    e.preventDefault();
    const { searchTerm } = this.state;
    const hashURL = `/users/${searchTerm}`;
    this.props.history.push(hashURL);
  }

  render() {
    return (
      <div>
        <h2>Search for a User</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Username:</label>
          <input 
          type="text" 
          placeholder="Username:" 
          className="u-full-width"
          id="username"
          onChange={this.handleChange}
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

export default Search