import React from "react";
import PropTypes from "prop-types";
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Book App</h1>
        <p>Here is our React Book App application. You can search for book. </p>
        <Link to="/Search">
          <button className="button-primary">Search</button>
        </Link>
      </div>
    );
  }
}

export default Home;
