import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

import Home from "./Home";
import Search from "./Search";
import ShowBook from "./ShowBook";
class Routes extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/"> Home</Link>
          <Link to="/search"> Search</Link>
          <Link to="/books/:book"> Show Book</Link>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/books/:book" component={ShowBook} />
      </div>
    );
  }
}

export default Routes;
