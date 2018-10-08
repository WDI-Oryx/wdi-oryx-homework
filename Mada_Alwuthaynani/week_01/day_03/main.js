var result=0; 
var rtrn;
function squareNumber(num) {
    result=num * num;
   rtrn="The result of squaring the number "+num+" is "+result;
   console.log(rtrn);
 return result;}
 function halfNumber(num) {
     result= num/2;
   rtrn="Half of "+num+" is "+ result;
   console.log(rtrn);
   return result;
 }
 function percentOf(num1 ,num2) {
   var num=num2/100;
     result= num1/num;
   rtrn=num1 +" is "+result+"% of "+num2;
   console.log(rtrn);
 return result;}
 function areaOfCircle(radius) {
   var num=Math.PI * radius * radius; 
     result = num.toFixed(2);
   rtrn="The area for a circle with radius "+radius+" is "+result;
   console.log(rtrn);
 return result;}
 function part_2(num) {
    console.log("part 2");
   var num1=squareNumber(halfNumber(num))
   percentOf(areaOfCircle(num),num1);
 }
 squareNumber(2);
 halfNumber(4);
 percentOf(3 ,6);
 areaOfCircle(2);
 part_2(3);
