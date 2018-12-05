import React from "react";
import PropTypes from "prop-types";
class Cards extends React.Component {
  constructor(props) {
    super();
    this.state = { cardData: null };
  }

  componentDidMount() {
    const baseURL = "https://api.magicthegathering.io/v1/cards";

    fetch(baseURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(r => r.json())
      .then(data => {
        this.setState({ cardData: data });
      });
  }

  render() {
    if (this.state.cardData === null) {
      return (
        <div>
          <h2>Something</h2>
        </div>
      );
    }
    // debugger;
    const {
      name,
      type,
      rarity,
      power,
      imageUrl,
      subtypes,
      artist,
      originalText
    } = this.state.cardData.cards[9];
    return (
      <div className="card">
        <h2>{name}</h2>
        <h4>{artist}</h4>
        <h5>{originalText}</h5>
        <img src={imageUrl} />
        <p>{power}</p>
        <p>{type}</p>
        <p>{rarity}</p>
        <p>{subtypes}</p>
      </div>
    );
  }
}

export default Cards;
