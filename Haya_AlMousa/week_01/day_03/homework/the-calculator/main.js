
// PART ONE 

// Square the Number

function squareNumber(number) { 

    var result = number * number;
    console.log("The result of squaring the number " + number + " is " + result);
    return result;
    
    }
    
    squareNumber(4);
    
    
    // Half of the Number
    
    function halfNumber(number) {
    
        var result = number / 2;
        console.log(" Half of " + number + " is " + result);
        return result;
    } 
    halfNumber(6);
    
    // Percent of a Number 
    
    function percentOf(numberFi, numberSe) {
        var result = (numberFi / numberSe) * 100;
        console.log( + numberFi + " is " + result + "% of " + numberSe);
        return result;
    }
    percentOf(2, 4);
    
    
    // Area of a Circle 
    
    function areaOfCircle(radius) {
        var result = (radius * radius * 3.14159);
        console.log( "The area for a circle with radius " + radius + " is " + result );
        return result;
    }
    
    areaOfCircle(2);
    
    
    
    
    //PART TWO
    
    function operate(number) {
    
     var half = halfNumber(number);
    
     var square = squareNumber(half); 
    
     var area = areaOfCircle(square);
                    
     var percent = percentOf(square, area);
    
    }
    
    operate (3);
    