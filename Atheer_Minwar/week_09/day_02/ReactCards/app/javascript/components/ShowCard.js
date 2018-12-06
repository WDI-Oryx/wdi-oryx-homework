import React from "react";
import PropTypes from "prop-types";
import Cards from "./Cards";
class ShowCard extends React.Component {
  render() {
    const cardId = this.props.match.params.id;
    // console.log(cardId);
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default ShowCard;
