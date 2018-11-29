import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import BookShow from "./BookShow";
class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            <Link to="/">Home </Link>
            <Link to="/search">Search </Link>
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/books/:bookname" component={BookShow} />
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
