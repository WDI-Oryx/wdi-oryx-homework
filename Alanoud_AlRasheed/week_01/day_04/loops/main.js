// # Homework - Arrays and Loops


// ## Part 1: Array Algorithms:



// 1. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) 
// all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, 
// and multiplyArray([1,2,3,4]) should return 24.

function sumArray(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log(sumArray([1, 2, 3, 4]));

function multiplyArray(arr) {
    var result = 1;
    for (var i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}


console.log(multiplyArray([1, 2, 3, 4]));


// 2. Define a function reverseString that reverses a string. 
// For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(word) {
    var reversedWord = "";
    for (i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    console.log(reversedWord);
}

reverseString("jag testar");

// 3. Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.

var classArray = [
    "student",
    "hi",
    "student",
    "lead instructor",
    "This is the longest sentence in this array",
    "lead",
    "associate instructor",
    "five fivers"
];

function findLongestWord(arrOfWords) {
    var currentWord = "";
    var x = 0;
    for (i = 0; i < arrOfWords.length; i++) {
        if (arrOfWords[i].length > x) {
            currentWord = arrOfWords[i];
            x = arrOfWords[i].length;
        }
    }
    console.log(currentWord);
}

findLongestWord(classArray);

// 4. Write a function filterLongWords that takes an array of words and a number i 
// and returns a new array of words that are longer than i characters long.

function filterLongWords(arrayOfWords, num) {
    var secondArray = [];
    for (i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > num) {
            secondArray.push(arrayOfWords[i]);
        }
    }
    console.log(secondArray);

}

filterLongWords(classArray, 8);

// ## Part 2: Zoltair:

// Build a function called `tellFortune` that takes four inputs: `name, job title, location, question`.
// Within the function declare and assign the following array
// ```javascript
// var fortunes = [
//   "Without a doubt",
//   "Yes!",
//   "Probably so",
//   "It isn't likely",
//   "it's possible",
//   "Absolutely",
//   "Not a chance",
//   "Ask again",
//   "No",
//   "I doubt it",
//   "No Way"
// ];
// ```
// Return a fortune to the user using their name, job title, location, the question they ask, 
// and a random element in fortunes. For example: 
//   ```javascript
//   tellFortune('Moath', 'IA', 'Demman', 'will I win the lottery this week?')
//   ``` 
//  returns
//  `"The IA, Moath of Demmam, asks 'will I win the lottery this week?' ... Without a doubt"`

function tellFortune(name, job, location, question) {
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
    var random = Math.floor(Math.random() * 11);
    var answer = fortunes[random];

    console.log("The " + job + ", " + name + " of " + location + ", asks '" + question + "' ... " + answer);

}

tellFortune('Moath', 'IA', 'Demman', 'will I win the lottery this week?');


// ## Part 3: BONUS - House of Cards:

// 1. Given the two arrays below, generate a new array that contains the full deck of 52 cards in this format: 
// "5H" for five of hearts, "QD" for Queen of Diamonds, etc. Log the full deck to the console.
// ```javascript
// var suits = ["S", "H", "D", "C"];
// var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// ```
var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var deck = [];
for (i = 0; i < suits.length; i++) {
    for (j = 0; j < values.length; j++) {
        deck.push(values[j] + suits[i]);
    }
}

console.log(deck);

// 2. (super bonus) After you construct your deck, write a function that randomly pulls two cards from your deck array 
// and returns their blackjack value (J, Q, K have a value of 10, and A has a value of 11)

function blackjack() {
    var w = Math.floor(Math.random() * 52);
    var q = Math.floor(Math.random() * 52);
    var cardArr = [deck[w],deck[q]];
    var value = 0;

for (var i =0;i<cardArr.length;i++){
    console.log(cardArr[i]);
    if (cardArr[i].includes("J") || cardArr[i].includes("Q") || cardArr[i].includes("K")) {
        value = "10";
        console.log(value);
    } else if (cardArr[i].includes("A")) {
        value = "11";
        console.log(value);
    } else {
        if (cardArr[i].startsWith('1')) {
            value = "10";
        } else {
            value = cardArr[i].charAt(0);
        }
        console.log(value);
    }
}
}

blackjack();