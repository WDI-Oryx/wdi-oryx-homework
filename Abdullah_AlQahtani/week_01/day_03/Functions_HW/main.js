function squareNumber (num){
    var result = num * num;
    console.log("The result of squaring the number " + num + " is " + result);
    return result;
}

function halfNumber (num){
    var result = num / 2;
    console.log("Half of " + num + " is " + result);
    return result;
}

function percentOf (numOne, numTwo){
    var result = (numOne / numTwo) * 100;
    result = result.toFixed(2);
    console.log(numOne + " is " + result + "%" + " of " + numTwo);
    return result;
}

function areaOfCircle (radius){
    var area = Math.PI * Math.pow(radius, 2);
    var result = area.toFixed(2); 
    console.log("The area for a circle with radius " + radius + " is " + result);
    return result;
}

function allFunction(num){
    var half = halfNumber(num);
    var square = squareNumber(half);
    var area = areaOfCircle(square);
    var result = percentOf(area, square);
    return result;
}

var num = prompt("Please, Enter any number : ");
console.log("The number is: " + num);
allFunction(num);