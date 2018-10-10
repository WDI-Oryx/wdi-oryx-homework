

// Arrays of the lines 

var lineN = ["Times Square", "34th", "28th of N line", "23rd of N line", "Union Square", "8th of N line"];
var lineL = ["8th of L line", "6th", "Union Square", "3rd", "1st"];
var line6 = ["Grand Central", "33rd", "28th of line six", "23rd of line six", "Union Square", "Astor Place"];

var userTrip = [];
var remainingStops = [];


// Loop of N line, full forward trip

function sumN(fullN) {

    var n = 0;

    for (i=0; i<lineN.length; i++) {

        n = n + fullN[i];

        if (lineN === fullN ) {
            console.log("You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square.");
        }

        
    }
}
sumN(["Times Square", "34th", "28th of N line", "23rd of N line", "Union Square", "8th of N line"]);
