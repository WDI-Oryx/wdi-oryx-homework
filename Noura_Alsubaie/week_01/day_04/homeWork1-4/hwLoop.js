
/// 1 
var cups = [1, 2, 3, 4];

function sumArrey(numbers) {
    var sumN = 0;
    for (var i = 0; i < numbers.length; i++) {
        sumN += numbers[i];

    }
    console.log(sumN);
}
sumArrey(cups);


function multiplyArrey(numbers) {
    var sumN = 1;

    for (var i = 0; i < numbers.length - 1; i++) {
        sumN += (sumN * numbers[i]);


    }
    console.log(sumN);
}
multiplyArrey(cups);



/// 2
function reverseString(string) {
    var reversed = "";
    for (var i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    console.log(reversed);
    return reversed;
}
reverseString("aroN");



///3

var listA = ["Nora", "Reema", "Abdulaziz", "Brman"];

function findLongestWord(names) {
    var longest = 0;
    for (var c = 0; c < names.length; c++) {
        if (names[c].length > longest.length) {
            longest = names[c].length;
        }
    }
    return longest;
}
console.log(findLongestWord(listA));


/// 4


function filterLongWords(list, num) {
    var listN = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].length > num) {
            listN.push(list[i]);
        }
    }
    return listN;
}
console.log(filterLongWords(listA, 7));

/// Part 2\\\


function fortune(name, jobTitle, location, question) {
    var fortuneTelling = [
   "Without a doubt",
  "Yes!",
  "Probably so",
  "It is likely",
  "it's possible",
  "Absolutely",
  "Ask again",
  "sure you WILL"

    ];
    var randomAn = Math.floor(Math.random() * (fortuneTelling.length));
    var ans =  ("The  "+ jobTitle +  ",  " +name+" of "+ location+ ", asks "+ question+ fortuneTelling[randomAn] );
    console.log(ans); 
    }
    fortune("Nora", 'EI specialist', 'Riyadh',  ' will I pass this course ?  ');


