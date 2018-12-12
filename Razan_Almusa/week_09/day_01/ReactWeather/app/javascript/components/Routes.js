import React from "react"
import { HashRouter, Route, Link } from "react-router-dom";
import App from "./App";
import Search from "./Search";
import WeatherResult from "./WeatherResult";
class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
          </nav>
          <Route exact path="/" component={App} />
          <Route path="/search" component={Search} />
          <Route path="/users/:cityname" component={WeatherResult} />
        </div>
      </HashRouter>
    );
  }
}
export default Routes