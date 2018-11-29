import React from "react";
class WeatherForm extends React.Component {
  constructor() {
    super();
    this.state = { locationResult: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    // const value = event.target.value;
    // console.log(value, this);
    this.setState({
      locationResult: event.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.appSearch(this.state.locationResult);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.locationResult}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default WeatherForm;
