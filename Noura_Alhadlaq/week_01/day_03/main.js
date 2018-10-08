// The Calculator

//part1
//square

function squareNumber(number){
 var result = Math.pow(number , 2);
console.log("The result of squaring the number "+ number + " is " + result);
return result;
} 

squareNumber(3);

//halfNumber

function halfNumber(number){
    var result = number / 2;
    console.log("Half of "+ number + " is " + result);
    return result;
    }  

halfNumber(5);

//percent of number

function percentOf(numOne , numTwo){
    var result = numOne * 100;
    result /= numTwo; 
console.log(numOne + " is " + result + "% of " + numTwo);
return result;
} 

percentOf(2 , 4);

// Area of Circle

function areaOfCircle( radius ){
    var result = Math.pow(radius , 2);
    result *= Math.PI;
    result = result.toFixed(2); // print two digits after decimal
    console.log("The area for a circle with radius "+ radius +" is " + result );
    return result;
    
}
areaOfCircle(2);


//part 2

function operations(num){
    var result = halfNumber(num);
    //console.log(result);
    var  squareResult = squareNumber(result);
     //console.log(squareResult);
    var  areaResult  = areaOfCircle(squareResult);
    // console.log(areaResult);
     var pecentageResult = percentOf(areaResult , squareResult);
    //console.log(pecentageResult);
}

operations(20);