var wordList = ["enlists", "google", "inlets", "banana", "istlen"];

function getAnagrams(word) {
  var anagramList = [];
  var sortedWord = word.split('').sort().join('');

  for (var i = 0; i < wordList.length; i++) {
    var sortedWord2 = wordList[i].split('').sort().join('');
    if (sortedWord === sortedWord2) {
      anagramList.push(wordList[i]);
    }
  }
  return anagramList;
}

var word = "listen";
var anagrams = getAnagrams(word);
console.log("The list of anagrams for " + word + " are: " + anagrams + ".");