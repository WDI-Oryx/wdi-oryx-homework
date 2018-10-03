// Homework - Arrays and Loops
console.log("Part -------------------1");
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.
// Write a function filterLongWords that takes an array of words and a number i and returns a new array of words that are longer than i characters long.

console.log("- The Sum Array.")
function sum(array){
    var s = 0;  
    for (var i = 0; i < array.length; i++){
    s = s + array[i];
    }
    console.log(s);
}
sum([1,2,3,4]);

///// 2nd part /////

console.log("- The Mulitplication Array.")
function multi(array){
    var m = 1;  
    for (var i = 0; i < array.length; i++){
    m = m * array[i];
    }
    console.log(m);
}
multi([1,2,3,4]); 

/////////////////////////////////////////
// 2. Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".
/////////////////////////////////////////

console.log("- The Reverse String.")
function reverseString(string) {
    var revstr= "";
    for (var i = string.length - 1; i >= 0; i--)
      revstr += string[i];
      console.log(revstr);
  }
  
reverseString("Hi my name is Faisal.")

/////////////////////////////////////////
// 3. Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.
/////////////////////////////////////////

console.log("- Find Longest Word.")
function findLongestWord(array){
    var word = "";
    for (var i = 0; i < array.length; i++){
        if (word.length < array[i].length){
            word = array[i];
        }
    }
    console.log(word);
}
findLongestWord(["apple","corn","chicken"]);

/////////////////////////////////////////
// 4. Write a function filterLongWords that takes an array of words and a number i and returns a new array of words that are longer than i characters long.
/////////////////////////////////////////

console.log("-Filter Long Words.");
function filterLongWords(array){
    var word = [];
    for (var i = 0; i < array.length; i++){
        if (array[i].length < 3){
            return word;
        } 
    }
    console.log(word);
}
filterLongWords(["orange","lamb","mango"]);
