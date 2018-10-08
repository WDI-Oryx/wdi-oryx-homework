console.log(" بسم الله ")


var numsArray = [1, 2, 3, 4];
function sumArray(numsArray) {
    sum = 0;
    for (var i = 0; i < numsArray.length; i++) {

        sum = sum + numsArray[i];
    }
    console.log("Here is the summation  " + sum);
    return sum
}
sumArray(numsArray);


function multiplyArrays(numsArray) {
    multi = 1;
    for (var i = 0; i < numsArray.length; i++) {
        multi = multi * numsArray[i];
    }
    console.log("Here is the multiplication result  " + multi);
    return multi
}
multiplyArrays(numsArray);

function reverseString(string) {
    var newstring = "";
    i = string.length - 1;
    while (i >= 0) {
        newstring = newstring + string[i];
        i--;
    }
    console.log(newstring);
    return newstring
}
reverseString("jag testar");

function findLongestWord(ArrayOfWords) {
    var i = 0;
    var lengthOfLongestWord = 0;
    while (i < ArrayOfWords.length) {
        if (ArrayOfWords[i].length > lengthOfLongestWord) {
            lengthOfLongestWord = ArrayOfWords[i].length;
        }
        i++;
    }
    console.log(lengthOfLongestWord);
    return lengthOfLongestWord
}
var classArray = [
    "student",
    "student",
    "student",
    "lead instructor",
    "student",
    "lead instructor",
    "associate instructor",
    "student"
];
console.log(classArray);
findLongestWord(classArray);

function filterLongWords(ArrayOfWords, i) {
    var filteredArray = [];
    for (j = 0; j <= ArrayOfWords.length - 1; j++) {
        if (ArrayOfWords[j].length > i) {
            filteredArray.push(ArrayOfWords[j]);
        }
    }
    console.log(filteredArray);
    return filteredArray
}

filterLongWords(classArray, 7);


function tellFortune(name, jobTitle, location, question) {
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
    var randomNum = Math.floor(Math.random() * fortunes.length);
    console.log("The " + jobTitle + ", " + name + " of " + location + ", asks " + question + " ..." + fortunes[randomNum]);
}

tellFortune("Moath", "IA", "Dammam", "'will I win the lottery this week?'");

var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function fullDeckGenerator(suits, values) {
    var fullDeck = [];
    // var valuePart = 0;
    // var suitpart = 0;
    for (var i = 0; i < values.length; i++) {
        // valuePart = values[i];
        for (j = 0; j < suits.length; j++) {
            // suitpart = suits[j];
            // fullDeck.push(valuePart + suitpart);
            fullDeck.push(values[i] + suits[j]);
        }
    }
    console.log(fullDeck);
    return fullDeck
}

fullDeckGenerator(suits, values);

function pull2Cards(suits, values) {
    fullDeck = fullDeckGenerator(suits, values);
    var fullDeckValues = [];
    for (var i = 0; i < values.length; i++) {
        for (var j = 0; j < suits.length; j++) {
            if (values[i] == "A") {
                fullDeckValues.push(11);
            } else if (values[i] == "J" || values[i] == "Q" || values[i] == "K") {
                fullDeckValues.push(10);
            } else {
                fullDeckValues.push(Number(values[i]));
            }
        }
    }
    var randomNum1 = Math.floor(Math.random() * fullDeck.length);
    var randomNum2 = Math.floor(Math.random() * fullDeck.length);
    while (randomNum2 === randomNum1) {
        randomNum2 = Math.floor(Math.random() * fullDeck.length);
        console.log(randomNum1);
        console.log(randomNum2);
    }
    var blackJackValue = fullDeckValues[randomNum1] + fullDeckValues[randomNum2];
    console.log(blackJackValue);
    return blackJackValue
}

pull2Cards(suits, values);