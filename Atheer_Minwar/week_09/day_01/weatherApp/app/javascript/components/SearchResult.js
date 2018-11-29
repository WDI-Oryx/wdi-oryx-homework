import React from "react";

class SearchResult extends React.Component {
  render() {
    const { coord, weather, sys } = this.props;
    return (
      <div>
        <h4>city Name {sys}</h4>
        <p> Coordinates: {coord}</p>
        <h3> Current weather: {weather}</h3>
      </div>
    );
  }
}

export default SearchResult;
