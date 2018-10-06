var someArray = [1, 2, 3, 4];

function multiplyArray(arr) {
	var cumulative = arr[0];
	for (let i = 1; i < arr.length; i++) {
		cumulative *= arr[i];
	}
	return cumulative;
}
console.log(multiplyArray(someArray));

function sumArray(arr) {
	var sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
console.log(sumArray(someArray));

function reverseString(str){
    var newString = "";
    for (let i = str.length-1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString("Hello"));

function findLongestWord(arr){
    var theLongest = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > theLongest){
            theLongest = arr[i].length;
        }
    }
    return theLongest;
}
var wordsArray = ["Ali", "Abdullah", "HelloBetterWorld", "Faisal"];
console.log(findLongestWord(wordsArray));

function filterLongWords(arr, num){
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > num){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filterLongWords(wordsArray, 5));
