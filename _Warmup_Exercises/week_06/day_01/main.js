var arrayToReverse = [1, 2, 3, 4, 5];
var arrayToFlatten = [1, [2, 3], 4, [5]];

function reverse(arr) {
  var reversedArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
  // return arr.reverse();
}

function flatten(arr) {
  var flattenedArray = [];

  for (var item of arr) {
    if (Array.isArray(item)) {
      for (var item2 of item) {
        flattenedArray.push(item2);
      }
    } else {
      flattenedArray.push(item);
    }
  }

  return flattenedArray;
  // return arr.flat(1);
}

console.log(reverse(arrayToReverse));
console.log(flatten(arrayToFlatten));
