import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

import Explore from "./Explore";
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1> Welcome to Saud's Page</h1>
          <Link to="/Explore">
            <button className="button-primary">Explore</button>
          </Link>

          <Route exact path="/explore" component={Explore} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
