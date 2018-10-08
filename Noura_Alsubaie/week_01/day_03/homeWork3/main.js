// Part 1 

function squareNumber(number){
    var result = number * number ;
    console.log("The result of squaring the "+ number + " is "+ result);
    return result;
}
squareNumber(3);



function halfNumber(number){
    var result = number / 2 ;
    console.log("Half of "+ number + " is "+ result);
    return result;
}
halfNumber(5);


function percentOf(numOne , numTwo){
    var result = numOne / numTwo * 100 +"%" ;      
    console.log( numOne + " is "+ result + " of " + numTwo);
    return result;
}
percentOf(20, 10);



function areaOfCircle(radius) {
    var circle=  (radius * radius * Math.PI);
    circle = Math.round(circle * 100) / 100;
    console.log("The area for a circle with " + radius +" is " + circle);
return;
  }
  areaOfCircle(2)  


  // Part 2.

  function operations(number) {
    var half = halfNumber(number);   
    var squared = squareNumber(half); 
    var area= areaOfCircle(squared); // the output is 50
    var result  = percentOf(squared, area);
    console.log(result); // the output is 4 is NaN% of undefined!
  }
  operations(4);