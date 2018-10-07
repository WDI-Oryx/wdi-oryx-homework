var letterScores = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"]
};

// Solution 1
function count1(word) {
  word = word.toUpperCase();
  var sum = 0;

  for (var i = 0; i < word.length; i++) {
    for (var score in letterScores) {
      if (letterScores[score].includes(word[i])) {
        sum += parseInt(score);
      }
    }
  }
  return sum;
}

// Solution 2
function count2(word) {
  word = word.toUpperCase();
  var sum = 0;

  for (var i = 0; i < word.length; i++) {
    for (key in letterScores) {
      if (letterScores[key].indexOf(word[i]) > -1) {
        sum += parseInt(key);
      }
    }
  }
  return sum;
}

// Solution 3 - Thanks Wafa!
var latters = {
  'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1,
  'N': 1, 'R': 1, 'S': 1, 'T': 1, 'D': 2, 'G': 2,
  'B': 3, 'C': 3, 'M': 3, 'P': 3, 'F': 4, 'H': 4, 'V': 4,
  'W': 4, 'Y': 4, 'K': 5, 'J': 8, 'X': 8, 'Q': 10, 'Z': 10
};
function count3(word) {
  word = word.toUpperCase();
  var sum = 0;
  for (var i = 0; i < word.length; ++i) {
    sum += latters[word.charAt(i)] || 0;
  }
  return sum;
}



console.log(count1("Hello there!"));
console.log(count2("Hello there!"));
console.log(count3("Hello there!"));
