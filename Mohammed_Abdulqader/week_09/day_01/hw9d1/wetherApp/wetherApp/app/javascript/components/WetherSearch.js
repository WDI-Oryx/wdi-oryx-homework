import React from "react";

class WetherSearch extends React.Component {
  render() {
    const {weather, description, weathericon} = this.props;
    return (
      <div>
        <h2>{this.props.coord}</h2>
        <h2>{weather} </h2>
        <h2>{description}</h2>
        <h2>{weathericon}</h2>
      </div>
    );
  }
}

export default WetherSearch;
