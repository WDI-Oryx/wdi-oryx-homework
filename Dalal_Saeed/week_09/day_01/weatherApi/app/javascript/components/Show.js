import React from "react";
import PropTypes from "prop-types";
class Show extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.weather}</h1>
      </div>
    );
  }
}

export default Show;
