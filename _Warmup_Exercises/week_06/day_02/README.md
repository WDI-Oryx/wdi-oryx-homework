## JS - Reduce

The `reduce()` method is used to apply a function to each element in the array to reduce the array to *a single value*. **Read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)**


The goal of this exercise is to:
1. Understand how `reduce()` works
2. Come up with an implementation to the `reduce()` function

**Do not use** any libraries or the built-in `reduce()` function for this task - write this from scratch using standard JS loops and functions

- Make one function
  - myReduce(array, callBack, initialValue)

## Example

```js
myReduce([1, 2, 3, 4], sum, 0);
// => 10

myReduce([1, 2, 3, 4], sum, 15);
// => 25

myReduce([1, 2, 3, 4], subtract, 0);
// => -8
```