import React from "react";

class SelectCity extends React.Component {
	handleSelection = e => {
		this.props.getWeatherOf(e.target.value);
	};
	render() {
		return (
			<div>
				<select name="cities" onChange={this.handleSelection}>
					<option value="Riyadh">Riyadh</option>
					<option value="London">London</option>
					<option value="Paris">Paris</option>
				</select>
			</div>
		);
	}
}

export default SelectCity;
