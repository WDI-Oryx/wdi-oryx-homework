import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Book app</h1>
        <Link to="/search">
          <button>Search</button>
        </Link>
      </div>
    );
  }
}

export default Home;
