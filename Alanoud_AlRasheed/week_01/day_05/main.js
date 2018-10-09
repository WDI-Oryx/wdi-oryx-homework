var lineN = [
    "Times Square",
    "34th",
    "28th",
    "23rd",
    "Union Square",
    "8th"
];

var lineL = [
    "8th",
    "6th",
    "Union Square",
    "3rd",
    "1st"
];

var line6 = [
    "Grand Central",
    "33rd",
    "28th",
    "23rd",
    "Union Square",
    "Astor Place"
];


function planTrip(startLine, startStop, endLine, endStop) {
    var stops = [];
    var stopsTwo = [];
    var tempStopName = startStop;
    var lineName = startLine;
    var endLineName = endLine;
    var counter = 0;

    // if statements to translate the parameters into the correct array name
    if (startLine === "N") {
        startLine = lineN;
    } else if (startLine === "L") {
        startLine = lineL;
    } else if (startLine == 6) {
        startLine = line6;
    }

    if (endLine === "N") {
        endLine = lineN;
    } else if (endLine === "L") {
        endLine = lineL;
    } else if (endLine == 6) {
        endLine = line6;
    }


    //Union Square is intersection point, this if statement is to make sure that the switch between subway lines is accounted for
    if (startStop !== "Union Square") {

        //the program behaves differently when the passenger doesn't need to change lines
        //this if statement is created to account fot those different behaviours 
        if (startLine === endLine) {
            var endingIndex = endLine.indexOf(endStop);
        } else {
            //since the switching is only possible through the US station 
            //we assume that it is the end destination for the first trip before the switch
            var endingIndex = startLine.indexOf("Union Square");
        }
        var index = startLine.indexOf(startStop);

        //this if-else statement is to differentiate whether the passenger is going backward or forward
        if (index > endingIndex) {
            for (var i = index - 1; i >= endingIndex; i--) {
                stops.push(startLine[i]);
                counter++;
            }
        } else {
            for (var i = index + 1; i <= endingIndex; i++) {
                stops.push(startLine[i]);
                counter++;
            }
        }
        var message = stops.join(', '); //turning array into string
        console.log("You must travel through the following stops on the " + lineName + " line: " + message);

        if (startLine !== endLine) {
            startStop = "Union Square"; //this assignment is made to start the next trip on the other line
            console.log("Change at Union Square.");
        }
    }

    //end of the if != US statement 

    //if trip starts at US no need to switch lines (treat all trips as single line trips)
    if (startStop === "Union Square") {

        var startIndex = endLine.indexOf("Union Square");
        var endIndex = endLine.indexOf(endStop);
        if (startIndex < endIndex) {
            for (var i = startIndex + 1; i <= endIndex; i++) {
                stopsTwo.push(endLine[i]);
                counter++;
            }
        } else {
            for (var i = startIndex - 1; i >= endIndex; i--) {
                stopsTwo.push(endLine[i]);
                counter++;
            }
        }
        var messageTwo = stopsTwo.join(', ');
        // debugger;

        if (tempStopName === "Union Square") {
            console.log("You must travel through the following stops on the " + endLineName + " line: " + messageTwo);
        } else {
            console.log("Your journey continues through the following stops: " + messageTwo);
        }
    }
    console.log(counter + " stops in total.");
}

// planTrip("N", "Times Square", "6", "33rd");
planTrip("N","Union Square","N","Times Square");