// fist function in part 1

function squareNumber (number){
    var result = number * number;
    console.log(" The resualt of squaring the number "+ number + " is " + result);
    return result;
}
squareNumber(3);

// second function in part 1 

function halfNumber (num){
    var half  = num / 2;
    console.log("Half of " + num + " is " + half);
    return half;
}
halfNumber(5);

// third function in part 1 

function percentOf(num1,num2){
var  per = (num1*100)/num2;
console.log( num1 + " is " + per +"% of " + num2  );
return per;
}
percentOf(2,4);

// fourth function in part 1
 function areaOfCircle (radius) {
     area = (radius * radius )* 3.14; 
     console.log("The area for a circle with radius "+ radius + " is " + area );
     return(area);
    
 }
 areaOfCircle(2);

 ////////////////////////////////////////////////////
 // part 2

// first one
function part2 (num){
    var res = halfNumber(num);
    var res1 = squareNumber(res);
    var res2 = areaOfCircle(res1);
    console.log(res2);
}
part2(2);