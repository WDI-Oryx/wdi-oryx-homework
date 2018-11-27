var arr = [1,2,3];
var maultArray = (e) => e * e;
console.log(arr.map(maultArray));

arr.mapp = function(maultArray) {
    var newArr = [];
    for(var i = 0 ; i < arr.length;i++){
        newArr.push(maultArray(arr[i]));
    }
    return newArr;
};

console.log(arr.mapp(maultArray));