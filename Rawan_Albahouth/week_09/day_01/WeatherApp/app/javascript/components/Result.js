import React from "react";

class Result extends React.Component {
  render() {
    const { location1, desc } = this.props;
    // const {  } = this.props;
    return (
      <div>
        <h3>{location1} Now </h3>
        <h3>{desc}</h3>
      </div>
    );
  }
}

export default Result;
