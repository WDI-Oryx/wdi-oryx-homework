// Arrays to hold lines and their stops
var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    lineL = ["8th", "6th", "Union Square", "3rd", "1st"],
    line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
    communStop = "Union Square", // Commun stop between the lines
    stopCounter = 0; // Counts the stops

// Function to get the line array from string
function getLine(aLine){
    var arr = [] // Empty array to hold the selected line

    // Checking which line is selected
    if(aLine === "N")
        arr = lineN;
    else if(aLine === "L")
        arr = lineL;
    else if(aLine === "6")
        arr = line6;

    // If none is selected, it will return an empty array
    return arr;
}
    
// Function to loop through a line array from specific start and end points
function fromTo(line, startPoint, destination){
    var through = ""; // String to hold the stops
    var a = line.indexOf(startPoint); // starting point index
    var b = line.indexOf(destination); // ending point index
    
    // Checking whether to loop normally through the array or in reverse
    if(b > a){
        // Moving forward through the array to the desired stop
        // a+1 is to start from the next stop
        for (let i = a+1; i <= b; i++) {
            through += line[i]; // Adding the stop to the string
            // If done end the string with "." else add ", "
            if(i === b) through += "."
            else through += ", "
            // Increment stop counter
            stopCounter++;
        }
    } else {
        // Moving backward through the array to the desired stop
        // a-1 is to start from the next stop
        for (let i = a-1; i >= b; i--) {
            through += line[i]; // Adding the stop to the string
            // If done end the string with "." else add ", "
            if(i === b) through += "."
            else through += ", "
            // Increment stop counter
            stopCounter++;
        }

    }
    // Returning the stops
    return through;
}

// Function to plan the trip (using previous funcitons) and print the output
function planTrip(sLine, sStop, eLine, eStop){

    // Getting the selected start line
    var line = getLine(sLine);
    // Printing the output of the line and stops
    console.log(`You must travel through the following stops on the ${sLine} line: ${fromTo(line, sStop, communStop)}`)

    // Changing the line
    console.log(`Change at Union Square from the ${sLine} line to the ${eLine} line.`);

    // Getting the selected end line
    line = getLine(eLine);
    // Printing the output of the line and stops
    console.log(`Your journey continues through the following stops: ${fromTo(line, communStop, eStop)}`)

    // Printing the total number of stops
    console.log(`${stopCounter} stops in total.`)

    // Reseting stop counter
    stopCounter = 0;
}

// Call planTrip function
console.log("Here is your trip from Times Square (N) to 33rd (6): ");
planTrip("N", "Times Square", "6", "33rd");
console.log("");
console.log("Here is your trip from 8th (N) to 8th (L): ");
planTrip("N", "8th", "L", "8th");
console.log("");
console.log("Here is your trip from 1st (L) to Grand Centeral (6): ");
planTrip("L", "1st", "6", "Grand Central");