import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import Github from "./Github"
import UserShow from './UserShow';
class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            <Link to="/">Home</Link>
          <br/>
            <Link to="/contact">Contact</Link> <br/>

            <Link to="/users/Halima95">Github Profile</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/users/:username" component={UserShow} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
    );
  }
}
export default Routes;