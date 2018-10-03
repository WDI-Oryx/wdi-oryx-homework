//The Calculator

// ## Part 1

// - Write a function called `squareNumber` that will take one argument (a number), square that number, and return the result. It should also log a string like `"The result of squaring the number 3 is 9."`

function squareNumber(number){
    var result = number * number;
    return result;
}

var num = 3;
var squareResult = squareNumber(num);
console.log("The result of squaring the number "+num+" is "+squareResult+".");

// - Write a function called `halfNumber` that will take one argument (a number), divide it by 2, and return the result. It should also log a string like `"Half of 5 is 2.5."`.

function halfNumber(number) {
    var result = number / 2;
    return result;
}

var numTwo = 5;
var halfResult = halfNumber(numTwo);
console.log("Half of "+numTwo+" is "+halfResult+".");

// - Write a function called `percentOf` that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like `"2 is 50% of 4."`

function percentOf(number, anotherNumber) {
    var result = (number / anotherNumber) * 100 ;
    return result;
}

var numThree = 2;
var numFour = 4;
var percentResult = percentOf(numThree, numFour);
console.log(numThree+" is "+percentResult+"% of "+numFour+".");

// - Write a function called `areaOfCircle` that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like `"The area for a circle with radius 2 is 12.566370614359172."`
// - Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(radius) {
    var area = 3.14159265359 * (radius * radius);
    var result = Math.round(area);
    return result;
}

var radius = 2;
var areaResult = areaOfCircle(radius);
console.log("The area for a circle with radius "+radius+" is "+areaResult+".");



// ## Part 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

function mathOperations(number){
    var halfTheNumber = halfNumber(number);
    var squareTheNumber = squareNumber(halfTheNumber);
    var areaOfNumber = areaOfCircle(squareTheNumber);
    var percentOfNumber = percentOf(areaOfNumber,squareTheNumber);
    console.log("Half of "+number+" is "+halfTheNumber+", \nand the square of "+halfTheNumber+" is "+squareTheNumber+", \nand the area of "+squareTheNumber+" is "+areaOfNumber+", \nand "+areaOfNumber+" is "+percentOfNumber+"% of "+squareTheNumber);

}

var testNumber = 4;
mathOperations(testNumber);
