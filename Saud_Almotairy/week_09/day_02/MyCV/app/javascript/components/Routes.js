import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

import App from "./App";
import Explore from "./Explore";
import Info from "./Info";
import Education from "./Education";
import Experince from "./Experince";

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/info">Personal Information</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/education">Education</Link>
            <Link to="/experince">Experince</Link>
          </nav>

          <Route exact path="/" component={App} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/experince" component={Experince} />
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
