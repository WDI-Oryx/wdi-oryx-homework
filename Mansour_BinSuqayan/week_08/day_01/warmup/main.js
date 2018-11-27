let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function encode(input) {
  let output = "";
  for (let char of input) {
    let index = alphabet.indexOf(char);
    output += alphabet.reverse()[index];
  }
  return output;
}

// Should return "zyxwvutsrqponmlkjihgfedcba"
console.log(encode("abcdefghijklmnopqrstuvwxyz"));
