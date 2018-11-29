import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class Routes extends React.Component {
	render() {
		return (
			<HashRouter>
				<div>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/contact">Contact</Link>
					</nav>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</div>
			</HashRouter>
		);
	}
}

export default Routes;
