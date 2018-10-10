
var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
var line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
var communStop = "Union Square";
var stopCounter = 0;

function getLine(aLine) {
    var arr = []

    if (aLine === "N")
        arr = lineN;
    else if (aLine === "L")
        arr = lineL;
    else if (aLine === "6")
        arr = line6;
    return arr;
}

function fromTo(line, startPoint, destination) {
    var through = "";
    var a = line.indexOf(startPoint);
    var b = line.indexOf(destination);


    if (b > a) {

        for (let i = a + 1; i <= b; i++) {
            through += line[i];
            if (i === b) through += "."
            else through += ", "

            stopCounter++;
        }
    } else {
        for (let i = a - 1; i >= b; i--) {
            through += line[i];
            if (i === b) through += "."
            else through += ", "
            stopCounter++;
        }
    }
    return through;
}
function planTrip(sLine, sStop, eLine, eStop) {

    var line = getLine(sLine);

    console.log(`You must travel through the following stops on the ${sLine} line: ${fromTo(line, sStop, communStop)}`)

    if (sLine !== eLine)
        console.log(`Change at Union Square from the ${sLine} line to the ${eLine} line.`);

    line = getLine(eLine);

    console.log(`Your journey continues through the following stops: ${fromTo(line, communStop, eStop)}`)

    console.log(`${stopCounter} stops in total.`)

    stopCounter = 0;
}

console.log("Here is your trip from Times Square (N) to 33rd (6): ");
planTrip("N", "Times Square", "6", "33rd");
console.log("");
console.log("Here is your trip from 8th (N) to 8th (L): ");
planTrip("N", "8th", "L", "8th");
console.log("");
console.log("Here is your trip from 1st (L) to Grand Centeral (6): ");
planTrip("L", "1st", "6", "Grand Central");
console.log("");
console.log("Here is your trip from 8th (L) to 1st (L): ");
planTrip("L", "8th", "L", "1st");
