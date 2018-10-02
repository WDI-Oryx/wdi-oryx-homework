// PART 1
// squareNumber Function
function squareNumber (number) {
    return Math.pow(number, 2);
}
var numberS = 3;
console.log("The result of squaring the number " + numberS + " is " + squareNumber(numberS));

// halfNumber Function
function halfNumber (number) {
    return number / 2;
}
var numberH = 5;
console.log("Half of " + numberH + " is " + halfNumber(numberH));

// percentOf Function
function percentOf (num1, num2) {
    return (num1 / num2) * 100;
}
var numberP1 = 2;
var numberP2 = 4;
console.log(numberP1 + " is " + percentOf(numberP1, numberP2) + "% of " + numberP2);

// areaOfCircle Function
function areaOfCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}
var radius = 2;
console.log("The area for a circle with radius " +  radius + " is " + areaOfCircle(radius).toFixed(2));

// PART 2

function calculation (number) {
    var half = halfNumber(number);
    var squar = squareNumber(half);
    var area = areaOfCircle(squar);
    var percent = percentOf(area, squar);
    console.log("Half = " + half + "\n" + "Squar = " + squar + "\n" + "Area = " + area + "\n" + "The percentage area of the squared result = " + percent);
}
calculation(10);