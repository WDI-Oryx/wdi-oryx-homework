let array = [1,2,3,4];

let multiplyByTwo = a => a * 2;


function ourMap(arr, callBack){
    let newArray = [];
    for (let el of arr){
       newArray.push(callBack(el));
    }

    return newArray;

}

console.log(ourMap(array, multiplyByTwo));