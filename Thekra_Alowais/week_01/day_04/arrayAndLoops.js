//part 1 - Array Algorithms
var nums = [1, 2, 3, 4];
var sumNums = 0;
var multiNums = 1;
function sumArray(array) {
    for (var i = 0; i < array.length; i++) {
        sumNums += array[i];
    }
    console.log(sumNums);
}
sumArray(nums);
function multiplyArray(array) {
    for (var i = 0; i < array.length; i++) {
        multiNums *= array[i];
    }
    console.log(multiNums);
}
multiplyArray(nums);

var myString = "jag testar";
var emptyString = "";
function reverseString(word) {
    for (var i = word.length - 1; i >= 0; i--) {
        emptyString += word[i];
    }
    console.log(emptyString);
}

reverseString(myString);

var words = ["Hello", "Heelloo", "Heeelllooo"];
var longest = 0;
function findLongestWord(word) {
    for (var i = 0; i < word.length; i++) {
        if (word[i].length > longest) {
            longest = word[i].length;

        }
    }
    console.log("The length of longest word is " + longest);
}
findLongestWord(words);

var words = ["Thekra", "Maha", "Walaa"];
var emptyArray = [];
function filterLongWords(array, num) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > num) {
            emptyArray.push(array[i]);
        }
    }
    console.log(emptyArray);
}
filterLongWords(words, 4);

//Part 2: Zoltair
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
function tellFortune(name, job, location, question) {
    randomString = fortunes[Math.floor(Math.random() * fortunes.length)];
    console.log("The " + job + ", " + name + " of " + location + " asks " + question + randomString);
}
tellFortune('Moath', 'IA', 'Demman', 'will I win the lottery this week? ... ');

//Part 3: BONUS - House of Cards
var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var newArray = [];
for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < suits.length; j++) {
        newArray = values[i] + suits[j];
        console.log(newArray);
    }

}
