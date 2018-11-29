import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

import App from "./App";
import About from "./About";
import Contact from "./Contact";

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            <Link to="/">Home</Link> <br />
            <Link to="/about">About</Link> <br />
            <Link to="/contact">Contact</Link> <br />
          </nav>
          <br />
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
