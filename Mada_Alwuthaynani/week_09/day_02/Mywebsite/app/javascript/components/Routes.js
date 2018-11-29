import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import App from "./App";
import Contacts from "./Contacts";
import Aboutus from "./Aboutus";

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/Contacts">Contacts</Link>
            <Link to="/Aboutus">About us</Link>
          </nav>

          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={App} />
            <Route path="/Contacts" component={Contacts} />
            <Route path="/Aboutus" component={Aboutus} />
          </AnimatedSwitch>
        </div>
      </HashRouter>
    );
  }
}

export default Routes;