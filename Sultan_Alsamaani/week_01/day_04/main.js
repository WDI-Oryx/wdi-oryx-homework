/*# Homework - Arrays and Loops


## Part 1: Array Algorithms:

1. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/
function sumArray(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
function multiplyArray(arr) {
    var result = arr[0];
    for (var i = 1; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}
/*
2. Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/
function reverseString(str) {
    var result = "";
    // debugger;
    for (var i = str.length-1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
/*
3. Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.
*/
function findLongestWord(arr) {
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length >= arr[index].length) {
            index = i;
        }
    }
    return arr[index].length;
}
/*
4. Write a function filterLongWords that takes an array of words and a number i and returns a new array of words that are longer than i characters long.
*/
function filterLongWords(arr, i) {
    var resultArr = [];
    // debugger;
    for (var j=0; j < arr.length; j++) {
        if (arr[j].length > i) {
            resultArr.push(arr[j]);
        }
    }
    return resultArr;
}
/*
## Part 2: Zoltair:

Build a function called `tellFortune` that takes four inputs: `name, job title, location, question`.
Within the function declare and assign the following array
```javascript
var fortunes = [
  "Without a doubt",
  "Yes!",
  "Probably so",
  "It isn't likely",
  "it's possible",
  "Absolutely",
  "Not a chance",
  "Ask again",
  "No",
  "I doubt it",
  "No Way"
];
```

Return a fortune to the user using their name, job title, location, the question they ask, and a random element in fortunes. For example: 
```javascript
tellFortune('Moath', 'IA', 'Demman', 'will I win the lottery this week?')
``` 
returns
`"The IA, Moath of Demmam, asks 'will I win the lottery this week?' ... Without a doubt"`
*/
function tellFortune(name, job_title, location, question) {
    var fortunes = [
        "Without a doubt",
        "Yes!",
        "Probably so",
        "It isn't likely",
        "it's possible",
        "Absolutely",
        "Not a chance",
        "Ask again",
        "No",
        "I doubt it",
        "No Way"
    ];
    var rndNum = Math.floor(Math.random() * 11)
    return "The " + job_title + ", " + name + " of " + location + ", asks '" + question + "' ... " + fortunes[rndNum];
}
/*

## Part 3: BONUS - House of Cards:

1. Given the two arrays below, generate a new array that contains the full deck of 52 cards in this format: "5H" for five of hearts, "QD" for Queen of Diamonds, etc. Log the full deck to the console.
```javascript
var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
```
*/
function generateTheCards() {
    var suits = ["S", "H", "D", "C"];
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var resultedArr = [];
    // debugger;
    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < values.length; j++) {
            resultedArr.push(suits[i] + values[j]);
        }
    }
    return resultedArr;
}
/*
2. (super bonus) After you construct your deck, write a function that randomly pulls two cards from your deck array and returns their blackjack value (J, Q, K have a value of 10, and A has a value of 11)
*/
function randPull(arr) {
    var theCard = arr[Math.floor(Math.random() * arr.length)];
    var resultNum = 0;
    if (theCard[1] === "J" || theCard[1] === "Q" || theCard[1] === "K") {
        resultNum = 10;
    } else if (theCard[1] === "K") {
        resultNum = 11;
    } else {
        resultNum = theCard[1];
    }
    return "the card is " + theCard + " the number for it " + resultNum;
}