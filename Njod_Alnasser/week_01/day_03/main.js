//---part1-1--------
function squareNumber(num) {
    var squaredNumber = num * num;
    console.log("The result of squaring the number "+ num + " is "+ squaredNumber);
    return squaredNumber;
}

squareNumber(3);


//---part1-2-----

function halfOf(num) {
    var half = num / 2;
    console.log("Half of "  + num + " is "+  half);
    return half;
}

halfOf(5);

//---part1-3--------


function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    console.log(num1 + " is " + percent + " % of " + num2);
    return percent;
}

percentOf(5, 10);

//-----part1-4------


function areaOfCircle(radius) {
    var area = Math.PI * squareNumber(radius);
    console.log("The area of circle with radius "+ radius + " is " + area);
    return area;
}

areaOfCircle(2);


//-------part2--------

function MultipleTask(num) {
    var half    = halfOf(num);
    var squared = squareNumber(half);
    var area    = areaOfCircle(squared);
    var result  = percentOf(squared, area);
}

MultipleTask(3);