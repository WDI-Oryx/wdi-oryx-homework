console.log("JS Connected!");

//Part 1: Array Algorithms:

/* 1. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. 
      For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24. */
var arrayNum = [1, 2, 3, 4]; // why 0
//Sum
function sumArray(addArray) {
    var result = 0;
    for (var i = 0; i < addArray.length; i++) {
        result += addArray[i];
    }
    return result;
}
console.log("The sum of the array", sumArray(arrayNum));
//Multiply
function multiplyArray(multArray) {
    var result = multArray[0];
    for (var i = 1; i < multArray.length; i++) {
        result *= multArray[i];
    }
    return result;
}
console.log("The multiplication of the array", multiplyArray(arrayNum));


/* 2. Define a function reverseString that reverses a string. For example, reverseString("jag testar") 
      should return the string "ratset gaj". */
function reverseString(str) {
    var result = "";
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(reverseString("jag testar"));
/* 3. Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array. */
var strArray = ["Mashael", "Nasser", "Almosallam"];
function findLongestWord(strLength) {
    var result = 0;
    for (var i = 0; i < strLength.length; i++) {
        result += strLength[i].length;
    }
    return result;
}
console.log(findLongestWord(strArray));
/*  4. Write a function filterLongWords that takes an array of words and a number i 
   and returns a new array of words that are longer than i characters long. */

/* function filterLongWords(strArray, number){
   
  }
*/

//Part 2: Zoltair:  NOT WORKING

/* Build a function called tellFortune that takes four inputs: 
name, job title, location, question. Within the function declare and assign the following array */
/* function tellFortune(name, jobTitle, location, question){
var fortunes = ["Without a doubt", "Yes!", "Probably so", "It isn't likely", "it's possible", "Absolutely", "Not a chance", "Ask again", "No", "I doubt it", "No Way"];

var random =Math.floor(Math.random()*11);
console.log("The "+jobTitle+", "+name+" of "+location+", "+question+"  ..."+random);

}tellFortune('Moath', 'IA', 'Demman', 'will I win the lottery this week?') */
//returns "The IA, Moath of Demmam, asks 'will I win the lottery this week?' ... Without a doubt"