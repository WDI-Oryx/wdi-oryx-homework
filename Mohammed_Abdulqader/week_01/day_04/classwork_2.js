
var array= [1,2,3,4] ;
var num = 0 ;
function sumArray (){
    for(var i=0 ; i<array.length ; i++){
    num = num + array[i];
}return num;

}
var res = sumArray();
console.log(res)
function multiplyArray (){
    var numb =1;
    for(var i=0 ; i<array.length ; i++){
        numb = numb * array[i];
    } return numb ; 

}
var del = multiplyArray();
console.log(del);
//

function reverse (str){
    var word =str.split("");

var reverseArray = word.reverse();

var joinArray = reverseArray.join("");

return joinArray;
}
var mm = reverse("hello");
console.log(mm)


