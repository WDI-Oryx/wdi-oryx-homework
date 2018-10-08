console.log("Ready to solve it");
var lineNStops = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var lineLStops = ["8th", "6th", "Union Square", "3rd", "1st"];
var line6Stops = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

// whichLine is a function used to correspondence the lineStops with the entered line
function whichLine(lineName) {
    if (lineName === "N") {
        var result = lineNStops;
    } else if (lineName === "L") {
        var result = lineLStops;
    } else if (lineName === "6") {
        var result = line6Stops;
    } else {
        console.log("This line is not in this subway");
    }
    return result
}

// stopIndicies is a function used to find the index of the stops
function stopIndicies(lineName, stopName) {
    var lineStops = whichLine(lineName);
    var stopIndex = lineStops.indexOf(stopName);
    return stopIndex
}
// passedStops is a fuction used to list the stops that the passenger going to pass through them either forth or back
function passedStops(startIndex, endIndex, lineName) {
    var lineStops = whichLine(lineName);
    var result = [];
    if (startIndex < endIndex) {
        for (var i = startIndex + 1; i <= endIndex; i++) {
            result.push(lineStops[i]);
        }
    } else {
        for (var i = startIndex - 1; i >= endIndex; i--) {
            result.push(lineStops[i]);
        }
    }
    return result
}
// message is a function used to help in writing the output  message to the passenger
function message(stopList1, line1, stopList2, line2) {
    var passedStopsList1 = ("You must travel through the following stops on the " + line1 + " line: ");
    for (var i = 0; i < stopList1.length; i++) {
        if (i < stopList1.length - 1) {
            passedStopsList1 = (passedStopsList1 + stopList1[i] + ", ");
        } else {
            passedStopsList1 = (passedStopsList1 + stopList1[i] + ".");
        }
    }
    if (stopList2.length === 0) {
        passedStopsList2 = "";
    } else {
        var passedStopsList2 = ("Your journey continues through the following stops on the " + line2 + " line: ");
        for (var i = 0; i < stopList2.length; i++) {
            if (i < stopList2.length - 1) {
                passedStopsList2 = (passedStopsList2 + stopList2[i] + ", ");
            } else {
                passedStopsList2 = (passedStopsList2 + stopList2[i] + ".");
            }
        }
    }
    return [passedStopsList1, passedStopsList2];
}
// planTrip is the main function that going to be called 
function planTrip() {
    var currentLine = prompt("Please enter your current line", "N");
    var currentLocation = prompt("Please enter your current stop", "8th");
    var destinationLine = prompt("Please enter your destination line", "L");
    var destination = prompt("Please enter your destination stop", "8th");
    var messag1 = ""; var messag2 = ""; var messag3 = ""; var messag4 = "";
    var result1 = []; var result2 = [];
    if (currentLine === destinationLine && currentLocation === destination) {
        var messag1 = "Your  current location and destination are one, you do not need to travel";
        var messag4 = "You will pass through " + 0 + " stops in total.";

    } else if (currentLine === destinationLine) {
        var startIndex = stopIndicies(currentLine, currentLocation);
        var endIndex = stopIndicies(destinationLine, destination);
        var result1 = passedStops(startIndex, endIndex, currentLine);
        var passedStopsList = message(result1, currentLine, result2, destinationLine);
        var messag1 = passedStopsList[0];
        var messag4 = (result1.length) + " stops in total.";
    } else {
        var startIndex = stopIndicies(currentLine, currentLocation);
        var endIndex = stopIndicies(currentLine, "Union Square");
        var result1 = passedStops(startIndex, endIndex, currentLine);
        var startIndex = stopIndicies(destinationLine, "Union Square");
        var endIndex = stopIndicies(destinationLine, destination);
        var result2 = passedStops(startIndex, endIndex, destinationLine);
        var passedStopsList = message(result1, currentLine, result2, destinationLine);
        var messag1 = passedStopsList[0];
        var messag2 = "Change at Union Square.";
        var messag3 = passedStopsList[1];
        var messag4 = (result1.length + result2.length) + " stops in total.";
    }
    return [messag1, messag2, messag3, messag4];
}
// this section is used to call the main function and print out the plan

var planPrint = planTrip();
console.log(planPrint[0]);
if (planPrint[1].length === 0) {
} else {
    console.log(planPrint[1]);
}
if (planPrint[2].length === 0) {
} else {
    console.log(planPrint[2]);
}
console.log(planPrint[3]);
// I could make it shorter but it needs more time. 
