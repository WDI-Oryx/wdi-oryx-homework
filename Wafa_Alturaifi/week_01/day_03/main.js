function squareNumber(number) {
    var ruslte= number*number;
    console.log("The result of squaring the number"+" "+num+" is "+ruslte);
    return ruslte;
}

function halfNumber(num){
halfresult= num/2;
console.log("half of"+" "+num+" is"+" "+halfresult);
return halfresult;
}

function percentOf(num1,num2) {
    respersntage=(num1/num2)*100;
    console.log(respersntage+" "+"is 50% of"+" "+num1);
    return respersntage;
}

function areaOfCircle(radius){
var area=radius*3.14;
console.log("The area for a circle with radius" +' '+radius+ "is"  +parseFloat(area));
return area;
}

function operations(Number) {
    var result=halfNumber(4);
      squareNumber(result);
      areaOfCircle(result);
      percentOf(result); 
      console.log(result);
      return result;

}


