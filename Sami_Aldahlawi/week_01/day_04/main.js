
///Part 1: Array Algorithms:

/*
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
 For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

function sumArray(arr){
    var sum = 0;
    for(var i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }
    return sum;
}

function multiplyArray(arr){
    var mult = 1;
    for(var i = 0; i < arr.length;i++){
        mult *= arr[i];
    }
    return mult;
}

var ar = [1,2,3,4];

console.log(sumArray(ar));
console.log(multiplyArray(ar));


/*
Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

function reverseString(str){
    var newStr = [];
    var trackArr = 0;
    for(var i = str.length - 1; i >= 0 ;i--){
        newStr[trackArr] = str[i];
        trackArr++;
    }
    return newStr;
}

console.log(reverseString("Sami"));

/*
Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.
*/


function findLongestWord(arr){
    var maxLength = 0;
    for(var i = 0; i < arr.length ; i++){
        if(arr[i].length > maxLength)
        maxLength = arr[i].length;
    }
    return maxLength;
}

console.log(findLongestWord(["sami","mohammed","ali","sami mohammed"]));


/*
Write a function filterLongWords that takes an array of words and a number i and
 returns a new array of words that are longer than i characters long.
*/

function filterLongWords(arr,num){
    var newArr = [];
    for(var i = 0; i < arr.length;i++){
        if(arr[i].length > num)
        newArr.push(arr[i]);
    }
    return newArr;
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
  
console.log(filterLongWords(classArray,7));



//////Part 2: Zoltair:

/*
Build a function called tellFortune that t
akes four inputs: name, job title, location, question. Within the function declare and assign the following array
*/

function tellFortune(name,jobTitle,locations,question){
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
      var rand = Math.floor(Math.random() * fortunes.length);
      return "The " + jobTitle + ", " + name + " of " + locations + ", asks " + question + " ... " + fortunes[rand];
}

console.log(tellFortune('Moath', 'IA', 'Demman', 'will I win the lottery this week?'));

//Part 3: BONUS - House of Cards:
var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var newGenerateArr = [];

for(var i = 0; i < suits.length ; i++){
    for(var j = 0; j < values.length ; j++){
        newGenerateArr.push(suits[i]+values[j]);
    }
}
console.log(newGenerateArr);

/*
(super bonus) After you construct your deck, 
write a function that randomly pulls two cards from your deck array 
and returns their blackjack value (J, Q, K have a value of 10, and A has a value of 11)
*/

function randomlyTwoCards(arrCard){
    var randOne = Math.floor(Math.random() * arrCard.length);
    var randTwo = Math.floor(Math.random() * arrCard.length);
    return [arrCard[randOne],arrCard[randTwo]];
}

console.log(randomlyTwoCards(newGenerateArr));


// The life is boring without problems (; that means there are not solutions