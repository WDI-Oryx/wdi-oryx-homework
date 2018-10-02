

function squareNumber (num){
    var s = num * num;
   return s;
   
    }

var ThreeSquare = squareNumber(3);
console.log("The result of squaring the number 3 is: "+ ThreeSquare);

 




//

function halfNumber (num){
    var s = num / 2;
   return s;
   
    }

var half = halfNumber(5);
console.log("Half of 5 is: "+ half);



//

function percentOf (num1,num2) 
{
    var pr = (num1/num2) * 100;
    console.log(num1 + ' is ' + pr + '% of ' + num2);
    return pr;
}
percentOf(2,4);
//
function areaOfCircle (radius){
    var a = Math.PI * squareNumber(radius);
    console.log("The area for a circle with radius "+ radius +" "+ "is"+" "+a);
    return a;
}
areaOfCircle(2);


//Part 2 

function Bouns(num){
    var half = halfNumber(num);
    var ThreeSquare = squareNumber(half);
    var a = areaOfCircle(ThreeSquare);
    var pr = percentOf(ThreeSquare,a);
}
Bouns(5);

