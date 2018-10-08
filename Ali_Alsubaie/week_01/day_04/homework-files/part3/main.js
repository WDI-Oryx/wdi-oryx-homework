var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var fullDeck = [];

for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
        var newCard = values[i] + suits[j];
        fullDeck.push(newCard);
    }
}

console.log(fullDeck);

function getValue(card) {
    if (card.startsWith("A")) {
        return 11;
    } else if (card.startsWith("J") ||
        card.startsWith("Q") ||
        card.startsWith("K") ||
        card.startsWith("1")) {
        return 10;
    } else {
        return parseInt(card.substring(0, 1));
    }
}

function drawTwo(cards) {
    var chosenCards = [];
    var rand = Math.floor(Math.random() * fullDeck.length);
    chosenCards.push(fullDeck[rand]);
    rand = Math.floor(Math.random() * fullDeck.length);
    chosenCards.push(fullDeck[rand]);
    return chosenCards;
}

var cardsAtHand = drawTwo(fullDeck);
for (let i = 0; i < cardsAtHand.length; i++) {
    var aCard = cardsAtHand[i];
    console.log("You got the " + aCard + " with the value of " + getValue(aCard));
}