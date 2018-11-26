import React from "react"

class Find extends React.Component {
  constructor(){
    super();
    this.state = { searchResult:""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({
      searchResult: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.appSearch(this.state.searchResult);
    // console.log(this.state.searchResult);
  }


  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
        value={this.state.searchResult}
        onChange={this.handleChange}/>
        <input type="submit" value="Search"/>
      </form>
    );
  }
}

export default Find
