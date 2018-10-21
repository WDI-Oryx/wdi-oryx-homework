var arr =[];

var primeNum =[];

function generateArr( endPoint ){
   var array = [];
    for (var i = 2 ;i <= endPoint ; i++){
        array.push(i);
  }
  return array;
}


console.log(generateArr(120));