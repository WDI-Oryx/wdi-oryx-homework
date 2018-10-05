

//squareNumber
function squareNumber(num){
    var result =num * num;
    return result;
}
var numToSquare=3;
console.log("The result of squaring the "+numToSquare+" is "+squareNumber(numToSquare));

//halfNumber
function halfNumber(num){
    return (num / 2);
}
var num =5;
console.log("Half of "+num +"i s "+ halfNumber(num));

//percentOf
function percentOf(num1,num2){
    var perc = (num1 / num2 )*100
    return perc;
}
var num1 = 2,num2=4;
console.log(num1+" is "+percentOf(num1,num2)+ "%"+" of " + num2 );

//areaOfCircle
function areaOfCircle(radius){
    return Math.pow(radius,2)*3.14; 
}
var radius = 2;
console.log("The area for a circle with radius "+radius+" is "+  areaOfCircle(radius));

// the function to use functions //halfNumber //percentOf //areaOfCircle //squareNumber
function calc(num){
    //Take half of the number and store the result.
    var result1 = halfNumber(num);
    console.log("half of "+num+" is "+result1);
   //Square the result of #1 and store that result.
   result2 = squareNumber(result1);
   console.log("The result of squaring "+result1+ " is "+result2);
   //Calculate the area of a circle with the result of #2 as the radius.
   var area = areaOfCircle(result2);
   console.log("area of circle with radius "+ result2 + " is "+ area);
   //Calculate what percentage that area is of the squared result (#3).
   var percantage = percentOf(area,result2)
   console.log(area+" is "+percantage+ "% of " + result2 );

}

calc(.5);





