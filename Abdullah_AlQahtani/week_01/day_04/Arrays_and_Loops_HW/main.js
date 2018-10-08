console.log("\n == part One ==");
console.log("\n == Sum ==");

function sumArray(num) {
    var sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    console.log(sum);
}
var sum = [1, 2, 3, 4];
sumArray(sum);

console.log("\n == Multiply ==");
function multiplyArray(num) {
    var multiply = num[0];
    for (let i = 1; i < num.length; i++) {
        multiply *= num[i];
    }
    console.log(multiply);
}
var multiply = [1, 2, 3, 4];
multiplyArray(multiply);

console.log("\n == Reverse ==");
function reverseString(message) {
    var string = "";
    console.log("message before reverse it : " + message);
    for (let i = message.length - 1; i >= 0; i--) {
        string += message[i];
    }
    console.log("message after reverse it : " + string);
}
reverseString("hello");

console.log("\n == The Longgest word ==");

function findLongestWord(message) {
    var longestWord = 0;
    var messageSplit = message.split(' ');
    for(var i = 0; i < messageSplit.length; i++){
      if(messageSplit[i].length > longestWord){
      longestWord = messageSplit[i].length;
       }
    }
    console.log("The LongestWord is : " +longestWord);
  }
  findLongestWord("Hello World Meow11");

console.log("\n == Filter The Longgest word ==");

  function filterLongWords(words, num){
  var longestWords = [];
  for (var i = 0; i< words.length; i++){
    if (words[i].length > num){
      longestWords[longestWords.length] = words[i];
    }
  }
  console.log("Filter the words with " + num + " characters long is : " + longestWords);
}  
  
var words = ["Abdullah", "Ali", "Faisal,Hessa"];
filterLongWords(words, 5);



//pasrt 2

console.log("\n == Part Two ==");

function tellFortune (name, job, place, question) {
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
    console.log("The " +job+", "+name+" of "+place+", asks '"+question+"' ... "+fortunes[rand]);
}

tellFortune('Moath', 'IA', 'Demman', 'will I win the lottery this week?');