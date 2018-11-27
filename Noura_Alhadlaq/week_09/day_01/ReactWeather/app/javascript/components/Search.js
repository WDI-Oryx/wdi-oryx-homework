import React from 'react';

class Search extends React.Component {
	constructor() {
		super();
		this.state = { entry: '' };
		this.handleChanges = this.handleChanges.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChanges(e) {
		console.log(this.state.entry);
		this.setState({
			entry: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		// console.log(this.state.entry);
		this.props.appSearch(this.state.entry);
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" value={this.state.entry} onChange={this.handleChanges} />
				<input type="submit" value="Search" />
			</form>
		);
	}
}

export default Search;
