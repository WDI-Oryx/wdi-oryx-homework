//Part One

//Sqaure Number 

function squareNumber (number) {
    var result = number * number ;
    console.log("The result of squaring the number " + number +  " is " + result);
    return (result);
   
}

squareNumber (3);

//Half number 

function halfNumber (number) {
var result = number / 2;
console.log("Half of " + number + " is " + result )
return (result);
}

  halfNumber(20);


  //Percent of

  function percentOf (numberOne ,numberTwo) {
      var result = ((numberOne / numberTwo) * 100); 
      console.log(numberOne + " is " + Math.round(result)+ "% of " +numberTwo);
      return(result);
  }
percentOf(2,4);



  //Area of a Circle

  function areaOfCircle (radius) {
      var area  = 3.14 * squareNumber(radius);
      console.log ("The area of a circle with radius " + radius + " is " + Math.round(area)  );
      return(area);

  }
  areaOfCircle(12);

  

// Part Two
//Combined function
 
function allInOne (number) {
var halfOf = halfNumber(number);
var sqaured = squareNumber (halfOf) ;
var circleCalc = areaOfCircle(sqaured);
var percentCalc = percentOf(circleCalc,sqaured);
}

allInOne(10); 