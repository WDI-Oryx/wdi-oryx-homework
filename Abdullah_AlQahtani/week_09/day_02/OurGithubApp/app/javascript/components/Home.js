import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Our Github App</h1>
        <p>
          Here is our React GitHub application. You can search GitHub users, and
          see their profile and their repositories 
        </p>
        <Link to="/search">
        <button className="button-primary">
           Search
        </button>
        </Link>
      </div>
    );
  }
}

export default Home;
