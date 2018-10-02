console.log("Hello World");

/* Write a function called squareNumber 
 that will take one argument (a number), 
 square that number, and return the result.
 It should also log a string like "The result of squaring the number 3 is 9." */

function squareNumber(number) {
    var result = number * number;
    console.log("The result of squaring the number " + number + " is " + result);
    return result;
}
squareNumber(4);

 /* Write a function called halfNumber 
 that will take one argument (a number), 
 divide it by 2, and return the result. 
 It should also log a string like "Half of 5 is 2.5.". */

 function halfNumber(number){
     var result = number / 2;
     console.log("Half of " + number + " is " + result);
     return result;
 }
 halfNumber(3);

 /* Write a function called percentOf 
 that will take two numbers, figure out what percent the first number represents
 of the second number, and return the result. 
 It should also log a string like "2 is 50% of 4." */

 function percentOf(x , y){
     var result = (x / y) * 100;
     console.log(x + " is " + result + "% of " + y);
     return result;
 }
percentOf(2 , 4);

/* Write a function called areaOfCircle that will take one argument (the radius),
 calculate the area based on that, and return the result. 
 It should also log a string like "The area for a circle with radius 2 is 12.566370614359172." */

 function areaOfCircle(radius){
     var result = 3.14 * squareNumber(radius);
     //var result = Math.PI * Math.pow(radius, radius);
     console.log("The area for a circle with radius " + radius + " is " + result);
     return result;
 }
 areaOfCircle(2);

/* Write a function that will take one argument (a number) 
 and perform the following operations, using the functions you wrote earlier1:
  Take half of the number and store the result.
  Square the result of #1 and store that result.
  Calculate the area of a circle with the result of #2 as the radius.
  Calculate what percentage that area is of the squared result (#3). */
function partTwo(number){
   var halfNumber = console.log( number / 2);
    var squareNumber = console.log(halfNumber * halfNumber);
    var areaOfCircle = console.log(Math.PI * squareNumber(squareNumber));
    var percent = console.log(percentOf(squareNumber,areaOfCircle));
   // var result=  console.log(halfNumber,squareNumber,areaOfCircle,percent);
    return result;
}
// partTwo(number);


