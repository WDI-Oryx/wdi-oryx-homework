//square Number

function squareNumber(number)
{
    var result = Math.pow(number , 2);
    return result;
}
var result = (squareNumber(3));

console.log("The result of squaring the number 3 is " + result + ".");

////---------
//halfNumber
function halfNumber(number)
{
    var result = number / 2;
    return result;
}
var result = (halfNumber(5));

console.log("Half of 5 is " + result);

//------------
// percentOf
function percentOf(numOne ,numTwo)
{
    var result = (numOne/numTwo)*100;
    return result;
}
var result = (percentOf(2 ,4));

console.log("2 is " + result + "% of 4");

//-------
// area Of Circle

function areaOfCircle(radius)
{
    var result = radius * 3.14 * 2;
    return result;
}
var result = (areaOfCircle(2));

console.log("The area for a circle with radius 2 is " + result);

//--------
//Part 2

function operations(number)
{
    var re = halfNumber(number);
    var square =squareNumber(re);
    var area = areaOfCircle(square);
    re = percentOf(square,area);

    return re;
}

var result = (operations(6));

console.log("The result of many operations in number 6 is " + result);
