var arr = [1,2,3,4];
var classArray = [
    "student",
    "student",
    "student",
    "lead instructor",
    "student",
    "lead instructor",
    "associate instructor",
    "student"
  ];

  
function sumArray (numArrar){
    var sum = 0;
    for ( var i = 0; i <numArrar.length ; i++ ){
        sum += numArrar[i];
    }

    return sum;
}

function multiplyArray(numArrar){
    var sum =1;
   for (var i = 0 ;i<numArrar.length ;i++ ){
       sum *= numArrar[i];
   }
   return sum;
}


function reverseString (word){
    var reverse = "";
    for (var i =word.length-1 ; i >= 0; i--){
        reverse += word[i]; 
    }
   return reverse;
}


function findLongestWord(arrWord){
    var count = 0;
    for (var i = 0 ; i < arrWord.length ;i++ ){
       if(count < arrWord[i].length){
           count = arrWord[i].length;
       }
    }   
    return count;
}


function filterLongWords(classArray, num){
    var newArray = [];
    for(var i = 0; i < classArray.length; i++){
        if(classArray[i].length > num){
            newArray.push(classArray[i]);
        }
    }
    return newArray;
}
console.log(sumArray(arr));
console.log(multiplyArray(arr));
console.log(reverseString("Hello"));
console.log(findLongestWord(classArray));
console.log(filterLongWords(classArray, 7));