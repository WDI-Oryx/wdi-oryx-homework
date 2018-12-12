function seq1(num) {
  return num % 2; // Is the same as (num % 2) ? 0 : 1 since the remainder of even numbers divided by 2 is just 0 and 1 for odds
}

function seq2(num) {
  return (num * (num + 1)) / 2
}

console.log(seq1(4)) // => 0
console.log(seq2(4)) // => 10
