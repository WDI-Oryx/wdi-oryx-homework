var myArray = [1, 2, 3, 4];

var sum = function (a, b) {
  return a + b;
};

var sub = function (a, b) {
  return a - b;
};

var multiply = function (a, b) {
  return a * b;
};

// Solution 1 - won't work properly with subtract and multiply Test it!
function myReduce1(array, callBack, init) {
  // Start with init, if it's undefined use 0 as the initial value
  var initialValue = init || 0;
  for (var i = 0; i < array.length; i++) {
    initialValue = callBack(initialValue, array[i]);
  }

  return initialValue;
}

// Solution 2 - should work the same way as .reduce(), TEST it with subtract and multiply!
function myReduce2(array, callBack, init) {
  // Start with init, if it's undefined use the first item in the array as the initial value
  var initialValue = init || array.shift();
  for (var i = 0; i < array.length; i++) {
    initialValue = callBack(initialValue, array[i]);
  }

  return initialValue;
}

console.log("---------- JS Reduce ----------");
console.log([1, 2, 3, 4].reduce(sum));
console.log([1, 2, 3, 4].reduce(sub));
console.log([1, 2, 3, 4].reduce(multiply));

console.log("---------- Solution 1 ----------");
console.log(myReduce1([1, 2, 3, 4], sum));
console.log(myReduce1([1, 2, 3, 4], sub));
console.log(myReduce1([1, 2, 3, 4], multiply));

console.log("---------- Solution 2 ----------");
console.log(myReduce2([1, 2, 3, 4], sum));
console.log(myReduce2([1, 2, 3, 4], sub));
console.log(myReduce2([1, 2, 3, 4], multiply));