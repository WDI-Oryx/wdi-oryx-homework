function squareNumber(number){
    var square = number * number ;
    return square ;
}

function halfNumber (number){
    var divide = number / 2 ;
    return divide ;
}

function percentOf (numOne , numTwo){
    var percent = numOne / numTwo * 100 ;
    return percent.toFixed(2) ;

}
function areaOfCircle (radius){
    var calculate = 3.14 * radius * radius ;
    return calculate.toFixed(2) ;

}

function part2 (number){
    var result = halfNumber(number);
    var result2 = squareNumber(result);
    var result3 = areaOfCircle(result2);
    var result4 = percentOf(result2,result3);
     return "the area of cycle is "+result3+" and the squared result is "+result2 +" percentage is "+result4 +"%";
}
  
console.log(part2(3));
