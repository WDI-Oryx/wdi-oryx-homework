var range = [];

// Makes a new range starting from 2-endOfRange
function makeRange(endOfRange) {
  for (var i = 2; i <= endOfRange; i++) {
    range.push(i);
  }
}

// Finds and returns a list of prime numbers in range
function findPrimes() {
  var primes = [];

  while (range.length > 0) {
    var nextPrime = range.shift();
    primes.push(nextPrime);

    range = range.filter(function (num) {
      return num % nextPrime !== 0;
    });
  }

  return primes;
}


makeRange(120);
var myPrimes = findPrimes();
console.log(myPrimes);