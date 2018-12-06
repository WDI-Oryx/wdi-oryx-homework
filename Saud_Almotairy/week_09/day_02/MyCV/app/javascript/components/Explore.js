import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Info from "./Info";
import Education from "./Education";
import Experince from "./Experince";
class Explore extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Check CV components</h1>
          <div>
            <Link to="/info">
              <button className="button-primary">Personal Information</button>
            </Link>
          </div>
          <div>
            <Link to="/education">
              <button className="button-primary">Education</button>
            </Link>
          </div>
          <div>
            <Link to="/experince">
              <button className="button-primary">Experince</button>
            </Link>
          </div>
          <Route exact path="/info" component={Info} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/experince" component={Experince} />
        </div>
      </HashRouter>
    );
  }
}

export default Explore;
