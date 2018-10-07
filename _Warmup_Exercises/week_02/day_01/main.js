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
// To find out more about for..in loops: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
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

// Soltuion 3 - Thanks Abdullah!
var score = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4
};

function count3(word) {
  word = word.toUpperCase();
  var sum = 0;

  for (let i = 0; i < word.length; i++) {
    var letter = word[i];
    sum += score[letter] || 0;

  }

  return sum;
}

// Solution 4 - Thanks Alanoud!
var letter = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};

function count4(word) {
  word = word.toUpperCase();
  var counter = 0;
  for (var i = 0; i < word.length; i++) {
    if (letter[word.charAt(i)] === undefined) {
      console.log("Please insert letters only!");
    }
    counter += letter[word.charAt(i)] || 0;
  }
  return counter;
}

// Solution 5 - Thanks Wafa!
var letters = {
  'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1,
  'N': 1, 'R': 1, 'S': 1, 'T': 1, 'D': 2, 'G': 2,
  'B': 3, 'C': 3, 'M': 3, 'P': 3, 'F': 4, 'H': 4, 'V': 4,
  'W': 4, 'Y': 4, 'K': 5, 'J': 8, 'X': 8, 'Q': 10, 'Z': 10
};
function count5(word) {
  word = word.toUpperCase();
  var sum = 0;
  for (var i = 0; i < word.length; ++i) {
    // if score doesn't exist for this charecter, add 0
    sum += letters[word.charAt(i)] || 0;
  }
  return sum;
}



console.log(count1("Hello there!"));
console.log(count2("Hello there!"));
console.log(count3("Hello there!"));
console.log(count4("Hello there!"));
console.log(count5("Hello there!"));
