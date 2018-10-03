// Write a function that will take any given year and return whether it is 
// a leap year or not. Remember that a leap year is:

// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400

// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true

function isLeapShort(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log("is a leap year");
  } else {
    console.log("is NOT a leap year");
  }
}

function isLeapLong(year) {
  if (year % 4 === 0) {
    if (year % 100 !== 0) {
      console.log("is a leap year");
    } else if (year % 400 === 0 && year % 100 === 0) {
      console.log("is a leap0 year");
    } else if (year % 100 === 0) {
      console.log("not a leap year");
    }
  } else {
    console.log("not a leap year");
  }
}

isLeapShort(4);
isLeapLong(4);