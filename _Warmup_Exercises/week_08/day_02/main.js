const arr = [1, 2, 3, 4];
let multiplyByTwo = (a) => a * 2;
let subtractThree = (a) => a - 3;

function myMap(array, callBack) {
  let newArray = [];
  for (let element of array) {
    newArray.push(callBack(element));
  }
  return newArray;
}

console.log(myMap(arr, multiplyByTwo));