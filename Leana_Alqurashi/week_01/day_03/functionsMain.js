// part 1
//1
function squareNumber(number){
number = parseInt(number);  
var sqr = number*number;
document.write("the result of squaring the number "+number+" is "+sqr+"<br/>");
return sqr;}
//2
function halfNumber(num){
    var half = num/2;
    document.write( "Half of "+num+ " is "+half+"<br/>");
    return half;
}
//3
function percentOf(num1 , num2){
var percent = (num1/num2)*100;
document.write(num1+" is "+percent+"% of "+num2+"<br/>");
return percent;
}
//4 + bonus
function areaOfCircle(r){
   var pie = Math.PI;
    var cArea = pie*(r*r);
    cArea =cArea.toFixed(2);
    document.write( "The area for a circle with radius "+r+" is "+ cArea+"<br/>");
return cArea;
}

// document.write(squareNumber(3)+"<br/>");
// document.write(halfNumber(350)+"<br/>");
// document.write(percentOf(3,1)+"<br/>");
// document.write(areaOfCircle(10)+"<br/>");
// //
//Part 2
function All(x){
    var halfnum =halfNumber(x);
    var squareOfHalf = squareNumber(halfnum);
    var AreaOfSquare = areaOfCircle(squareOfHalf);
    var PercentageOfArea = percentOf(squareOfHalf,AreaOfSquare);
    document.write("half :"+halfnum + ", square of half : " +squareOfHalf +", Area of half: " +AreaOfSquare+", Prercentage of square to area: "+PercentageOfArea);
}
All(9);