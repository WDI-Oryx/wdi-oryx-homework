import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import PostShow from "./PostShow";
class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            <Link to="/">Home </Link>
            <Link to="/search">Search</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/posts/:post" component={PostShow} />
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
