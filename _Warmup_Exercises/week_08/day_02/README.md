## JS - Map

The `map()` method creates a new array with the results of calling a provided function on every element in the calling array. **Read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)**


The goal of this exercise is to:
1. Understand how `map()` works
2. Come up with an implementation of the `map()` function

**Do not use** any libraries or the built-in `map()` function for this task - write this from scratch using standard JS loops and functions

- Make one function
  - myMap(array, callBack)
  - OR myMap(callBack) // How would you pass your array here?

## Example

```js
mymap([1, 2, 3, 4], multiplyByTwo);
// => [2, 4, 6, 8]

mymap([1, 2, 3, 4], subtractThree);
// => [-2, -1, 0, 1]
```