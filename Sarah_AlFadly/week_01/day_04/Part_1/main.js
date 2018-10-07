// sumArray Function
function sumArray (numArray) {
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
}

// multiplyArray Function
function multiplyArray (numArray) {
    var multiply = 1;
    for (var i = 0; i < numArray.length; i++) {
        multiply *= numArray[i];
    }
    return multiply;
}

var numbers = [1, 2, 3, 4];
console.log("Addition Result = " + sumArray(numbers) + "\n" + "Multiplication Result = " + multiplyArray(numbers));

// reverseString Function
function reverseString (name) {
    var reverseName = "";
    for(var i = (name.length) - 1; i >= 0; i --) {
        reverseName += name[i];
    }
    return reverseName;
}
var name = "jag testar";
console.log(reverseString(name));

// findLongestWord Function
function findLongestWord (words) {
    var longestWord = "";
    for (var i = 0; i < words.length; i++) {
        if (longestWord.length < words[i].length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
var plantsGrowing = ["water", "sun", "air", "soil"];
console.log(findLongestWord(plantsGrowing));

// filterLongWords Function
function filterLongWords (words, num) {
    var filterArray = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > num) {
            filterArray.push(words[i]);
        }
    }
    return filterArray;
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
console.log(filterLongWords(classArray, 7).toString());
