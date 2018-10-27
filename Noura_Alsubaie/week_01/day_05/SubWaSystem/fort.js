var lineN = ["Times Square", "34th" , "28th" , "23rd","Union Square", "8th"];


var startingStation = "34th";
var endingStation="23rd";


var startingIndex= lineN.indexOf(startingStation);
var endingIndex= lineN.indexOf(endingStation);

if (startingIndex > endingStation){
for (var i=startingIndex; i>=endingIndex;i-- ){
    var currentStation=lineN[i];
    console.log(currentStation);}

}
else {for (var i =startingIndex;startingIndex<=endingIndex;i++){
    var currentStation=lineN[i];
    console.log(currentStation);
   
}}



planTrip("34th", "23rd");



