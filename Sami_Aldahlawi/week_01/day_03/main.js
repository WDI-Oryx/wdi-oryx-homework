//Part 1


//Write a function called squareNumber that will take one argument (a number), 
//square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber(num){
    var squareN = num * num;
   // return "The result of squaring the number" + num + "is " + squareN;
   return squareN;
}

/*
Write a function called halfNumber that will take one argument (a number), 
divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
*/

function halfNumber(num){
    var div = num / 2;
    //return "Half of " + num + " is " + div;
    return div;
}


/*
Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number,
 and return the result. It should also log a string like "2 is 50% of 4."
*/

function percentOf(numOne, numTwo){
    var percent = numOne / numTwo * 100;
    return numOne + " is " + percent + "% of " + numTwo;
   // return percent;
}

/*
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
 It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
*/

function areaOfCircle(radius){
    var pi = 3.14;
    var area = radius * radius * pi;
    //return "The area for a circle with radius "+ radius +" is " + area.toFixed(2);
    return area;
}


//Part 2

function fun(number){
   var hNumber =  halfNumber(number);
   var Sqresult = squareNumber(hNumber);
   var areaCircle = areaOfCircle(Sqresult);
   return percentOf(areaCircle,Sqresult);
}