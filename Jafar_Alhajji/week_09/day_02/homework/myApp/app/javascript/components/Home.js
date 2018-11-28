import React from "react";
import PropTypes from "prop-types";
import About from "./About";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>This is the first App with routes concept</h2>
        <Link to="/about">
          <button>click me</button>
        </Link>
      </div>
    );
  }
}

export default Home;
