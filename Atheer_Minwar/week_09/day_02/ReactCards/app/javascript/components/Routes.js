import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import Cards from "./Cards";
import ShowCard from "./ShowCard";
import Search from "./Search";

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            {/* <Link className="nav" to="/">
              Home
            </Link> */}
            <Link className="nav" to="/cards">
              All cards{" "}
            </Link>
            {/* <Link className="nav" to="/cards/1">
              Single card
            </Link> */}
          </nav>

          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/cards" component={Cards} />
            {/* <Route path="/cards/:id" component={ShowCard} /> */}
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
