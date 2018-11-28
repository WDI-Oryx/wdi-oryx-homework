import React from "react";
import PropTypes from "prop-types";
import { HashRouter, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
// import { AnimatedSwitch } from "react-router-transition";
class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact</Link>
          </nav>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
