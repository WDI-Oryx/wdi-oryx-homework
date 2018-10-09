// part 1 Q1
var Array = [1,2,3,4];
function sumArray(Array){
    for (var i = 0; i< 4 ; i++){
        var sum = 0;
      sum += array[i];
        var multiply = 0;
        multiply = multiply * array[i];
        console.log(sum + multiply);
    }
}
sumArray(Array);



// q2
// using js mthods 
function reverseString(str) {

    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    console.log(joinArray);
}
reverseString("jag testar");


//q3
var ar = ["R","RA","RAZ","RAZA","RAZAN"];
function findLongestWord(str){
    for (var i =0; i<array.length; i++){
        var longest = 0;
        if (longest<array[i].length){
            longest = array[i];
            
        }
    } console.log(longest);  }

findLongestWord(array);