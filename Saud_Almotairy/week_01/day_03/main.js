console.log("Hello World");
var Number = 5;
function squareNumber(Number){
    var square = Number*Number;
    console.log("The result of squaring the number " + Number + " is " + square);
    return square
} 
squareNumber(Number);

function halfNumber(Number){
    var half = Number/2;
    console.log("Half of the number " + Number + " is " + half);
    return half
} 
halfNumber(Number);

var ofNumber = 10;

function percentOf(Number, ofNumber){
    var percent = 100*Number/ofNumber;
    console.log(Number + " is " + percent + "% of " + ofNumber);
    return percent
} 
percentOf(Number,ofNumber);
// 
function areaOfCircle(radius){
    var arcircle = Math.PI*(radius*radius);
    console.log( "The area of a circle with radius " + radius + " is " + arcircle );
    var rounded2D = Math.round(arcircle*100)/100;
    console.log( "The area of a circle with radius " + radius + " rounded to 2 digiits after the decimal is " + rounded2D );
    return arcircle
} 
areaOfCircle(Number);


function playAround(Number){
    half = halfNumber(Number);
    // the result of #1 stored in half
    square = squareNumber(half);
    //the result of #2 stored in square
   arcircle = areaOfCircle(square);
    // the result of #3 stored in arcircle
    percent = percentOf(arcircle,square);
    // the result of #4 stored in percent
    console.log( " The result of #1 is " + half +",  the result of #2 is " + square + ", the result of #3 is " + arcircle + " and the result of #4 is " + percent);
}
playAround(Number);