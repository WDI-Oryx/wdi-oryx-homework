var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var fullDuck = [];
var k = 0;

for (var i = 0; i < suits.length; i++){
    for (var j = 0; j < values.length; j++) {
        fullDuck[k] = values[j]+suits[i];
        k++;
    }
}

console.log(fullDuck.toString());
