console.log("JS Connected!");

//declare variables
var nLine = ["Times Square", "34th", "28th", "23th", "Union Square", "8th"];
var lLine = ["8th", "6th", "Union Square", "3rd", "1st"];
var sLine = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
var change = [];
var stop = [];

function planTrip(line, start, end, finalStop) {
    // start / what line
    if (line === "N" /* && "Times Square" && "34th" && "28th" && "23th" && "Union Square" && "8th" */) {
        line = nLine;

    } else if (line === "L"/*  && "8th" && "6th" && "Union Square" && "3rd" && "1st" */) {
        line = lLine;

    } else if (line === 6 /* && "Grand Central"&& "33rd"&& "28th"&& "23rd"&& "Union Square"&& "Astop Place "*/) {
        line = sLine;


    }

    if (end === "N") {
        end = nLine;
    } else if (end === "L") {
        end = lLine;
    } else if (end === 6) {
        end = sLine;
    }

    // check whether the user want to change routes 
    if (start === end.indexOf("Union Square")) { // stop at Union square to change station 
        var starting = end.indexOf("Union Square");

    } else if (start !== end.indexOf("Union Square")) { // countinue to the end of the route 
        var ending = end.indexOf(finalStop);
    }

    // take the subway from end to start 
    if (starting > ending) {
        for (var i = index - 1; i >= ending; i--) {
            stop.push(end[i]);
            change++;
        }
    }
    else {
        for (var i = index + 1; i <= ending; i++) {
            stop.push(start[i]);
            change++;
        }
    }
    console.log("You must travel through the following stops " + start + "line: " + stops + " Total of stops:" + stops.length());
}

console.log(planTrip("L", "Times Square", "6", "33rd"));