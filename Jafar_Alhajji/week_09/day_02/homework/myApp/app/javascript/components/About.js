import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div>
        <p>My name is jafar abdullah</p>

        <p>
          for more info
          <Link to="/contact">
            <button>click me</button>
          </Link>
        </p>
      </div>
    );
  }
}

export default About;
