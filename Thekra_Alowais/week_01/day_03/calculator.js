//part 1
//SQUARENUMBER QUESTION
var number=3;
function squaredNumber(num){
var result=Math.pow(num,2);
console.log("The result of squaring the number " + num + " is " + result);
return result;
}
squaredNumber(number);
//HALFNUMBER QUESTION
var number=5;
function halfNumber(num){
var result = num /2;
console.log("HAlf of " +num+ " is " + result);
return result;
}
halfNumber(number);
//PERCENT QUESTION
var firstNum=2;
var secNum=4;
function parcentOf(numOne, numTwo){
var result= ((numOne / numTwo)*100).toFixed(0);
console.log(numOne + " is " + result+"% of "+numTwo);
return result;
}
parcentOf(firstNum,secNum);


//AREA OF CIRCLE
var number=2;
function areaCircle(radius){
var area=(Math.pow(radius,2)*3.14).toFixed(2);
console.log("The area for a circle with radius " + radius + " is " + area);
return area;
}
areaCircle(number);

//part2
var number=2;
function extraMethod(num){
var theHalfNum=halfNumber(num);
var theSquareNum=squaredNumber(theHalfNum);
var theRadius=areaCircle(theSquareNum);
var thePercent=parcentOf(theSquareNum,theRadius);
}
extraMethod(number);