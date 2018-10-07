//Part 1


function squaredNumber (num) {
    var result = num * num ;
    console.log("The result of squaring the number " + num + " is " + result);
return result;

}
squaredNumber(4);


function halfNumber (num){

    var half = num / 2 ;
    console.log("Half of "+ num + " is " + half)
    return half;
}
halfNumber(10);

function percentOf(numOne, numTwo) {
    var percent = (numOne / numTwo) * 100;
    console.log(parseFloat(numOne.toFixed(2)) + ' is ' + parseFloat(percent.toFixed(2)) + '% of ' + parseFloat(numTwo.toFixed(2)));
    return percent;
}

percentOf(10, 20);

function areaOfCircle(radius){
    var Area = Math.PI * Math.pow(radius, 2);
    
console.log ("The area for a circle with radius " +radius +" is " + parseFloat(Area.toFixed(2)));
return Area;

}
areaOfCircle(2);



//Part 2

function callFunctions(num){
    var half = halfNumber(num);
var square = squaredNumber(half);
var Area = areaOfCircle(square);
var finalResult = percentOf(square,Area );

}
callFunctions(4);

