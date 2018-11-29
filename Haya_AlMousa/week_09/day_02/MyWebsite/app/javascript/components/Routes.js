import React from "react"

import { HashRouter, Route, Link } from 'react-router-dom'

import Home from "./Home"
import Profile from "./Profile"
import Contact from "./Contact"

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            < Link to="/" >Home </Link >
            < Link to="/profile" >Profile </Link >
            < Link to="/contact" >Contact </Link >
          </nav>

                  <Route exact path="/" component={Home} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/contact" component={Contact} />
                  
        </div>
      </HashRouter>
              );
            }
          }
          
export default Routes