//Homework for Week 01 Day 03//
//Part 1

console.log("PART ----------1");

console.log("-Square The Number");

function squareNumber (x){
    var result = x * x;
    
    console.log("The result of squaring the number "+x+ " is "+result);
    return result;
}

squareNumber(3);
/////////////////////////////////

console.log("-Half The Number");

function halfNum (x){
    var result = x / 2;
    
    console.log("Half of " +x+" is "+ result);
    return result;
}

halfNum(7);
//////////////////////////////////

console.log("-Percent of");

function percentNum (x, y){
    var result = Math.floor( (x/y) * 100 );
    
    
    console.log(x+" is "+ result+"% of "+y);
    return result;
}
percentNum(5, 6);

/////////////////////////////////////

console.log("-Area of a Circle.");

function radius(x){
    var area = Math.floor(3.14 * (x * x));

    console.log("The area of a circle with radius "+x+"cm is "+area+"cm^2.");
    return area;
}
radius(5)

//////////////////////////////////////

// Part 2

console.log("PART ----------2");

console.log("Part 2 Homework");


function partTwo(x){
    var half = x / 2;
    console.log("Half of "+x+ " is "+ half+".");
    var square = half * half;
    console.log("Square of "+half+ " is "+ square+".");
    var areaC = Math.floor(3.14 * (square * square));
    console.log("The Area of the Circle with a radius of "+square+"cm is "+areaC+"cm^2.");
    var percentage = Math.floor((square/areaC)*100);
    console.log("The percentage of "+square+ " in the Area of the Circle is "+ percentage+"%.");
}
partTwo(5);

////////////////////////////////////////////


