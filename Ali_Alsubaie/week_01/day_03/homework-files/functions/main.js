function squareNumber (aNumber){
    var squared = aNumber * aNumber;
    console.log("The result of squaring the number " + aNumber + " is " + squared);
    return squared;
}

function halfNumber (aNumber){
    var halved = aNumber / 2;
    console.log("Half of " + aNumber + " is " + halved);
    return halved;
}

function areaOfCircle (r){
    var area = Math.PI * Math.pow(r, 2);
    area = area.toFixed(2); // To print the number with two decimal numbers
    console.log("The area for a circle with radius " + r + " is " + area);
    return area;
}

function percentOf (numOne, numTwo){
    var result = (numOne / numTwo) * 100;
    result = result.toFixed(2);
    console.log(numOne + " is " + result + "% of " + numTwo);
    return result;
}

function doTheWork(aNum){
    var halfTheNum = halfNumber(aNum);
    var squaredNum = squareNumber(halfTheNum);
    var theArea = areaOfCircle(squaredNum);
    var result = percentOf(theArea, squaredNum);
    return result;
}

var number = 7;
console.log("The number we're working with is: " + number);
doTheWork(number);