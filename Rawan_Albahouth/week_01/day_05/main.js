var N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var L = ["8th", "6th", "Union Square", "3rd", "1st"];
var six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astore Place"];

// Forward on one line (full trip)
Start: 0
End: N.length
Step: + 1
for ( var i = 0; i < N.length; i++ ) {
    var station = N[i];
    console.log(station);
}

// Forward on one line (partial trip)
Start: 1
End: 5
Step: + 1
for (var i = 1; i < 5; i++) {
    var station = N[i];
    console.log(station);   
}

// Make your indexes dynamic!

var startingStation = "34th";
var endingStation = "8th";
var startingIndex = N.indexOf(startingStation);
var endingIndex = N.indexOf(endingStation);

for (var i = startingIndex; i <= endingIndex; i++) {
    var station = N[i];
    console.log(station);    
}




// this is what i got after jack's help .. hh just trying to solve 





