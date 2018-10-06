
//Part 1: Array Algorithms

function sumArray(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        result += array[i];
    } console.log(result);
    return result;
}
sumArray([1, 2, 3, 4]);


function multiplyArray(array) {
    var result = 1;
    for (var i = 0; i < array.length; i++) {
        result = result * array[i];
    } console.log(result);
    return result;
}

multiplyArray([1, 2, 3, 4]);

// Write a function findLongestWord that takes an array of words and 
// returns the length of the longest word in the array.

function findLongestWord(array) {
    var count = 0;
    var word;
    for (i = 0; i < array.length; i++) {
        if (array[i].length > count) {
            count += array[i].length;
            word = array[i];
        }
    } console.log(word);
}

findLongestWord(["Noura", "ghada Alnasser", "reema", "ghalia"]);

// Write a function filterLongWords that takes an array of words and a 
// number i and returns a new array of words that are longer than i 
// characters long.

function filterLongWords(array, num) {
    var newArray = new Array();
    for (var i = 0; i < array.length; i++) {
        if (array[i].length <= num) {
            newArray.push(array[i]);
        }
    } console.log(newArray);
}

filterLongWords(["Noura", "ghada Alnasser", "reema", "ghalia"], 6);

//Part 2: Zoltair


// Build a function called tellFortune that takes four inputs: 
// name, job title, location, question.
// Return a fortune to the user using their name, job title, 
// location, the question they ask, and a random element in fortunes.


function tellFortune(name, jobTitle, location, question) {
    var fortunes = ["Without a doubt", "Yes!", "Probably so",
        "It isn't likely", "it's possible", "Absolutely",
        "Not a chance", "Ask again", "No", "I doubt it", "No Way"];

    var fortune = Math.random();
    fortune = Math.floor(fortune * 11);
    fortune = fortunes[fortune];

    console.log("The " + jobTitle + ", " + name + " of " + location +
        ", asks " + question + " ... " + fortune);
}

tellFortune('Moath', 'IA', 'Demman', 'will I win the lottery this week?')




//BONUS - House of Cards:

// Given the two arrays below, generate a new array that contains the
//  full deck of 52 cards in this format: "5H" for five of hearts, "QD"
//   for Queen of Diamonds, etc. Log the full deck to the console.

var suit = ["S", "H", "D", "C"];
var value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J",
    "Q", "K"];

function houseOfCards(values, suites) {
    var cardsArray = new Array();
    for (var i = 0; i < suites.length; i++) {
        for (var j = 0; j < values.length; j++) {
            var card = values[j] + suites[i];
            cardsArray.push(card);

        }
    } console.log(cardsArray);
}

houseOfCards(value, suit);

//(super bonus) After you construct your deck, write a function that 
// randomly pulls two cards from your deck array and returns their 
// blackjack value (J, Q, K have a value of 10, and A has a value of 11)