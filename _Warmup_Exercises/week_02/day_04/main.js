// To select similar words (click on a word + CMD + D)
var lines = {
  "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L": ["8th", "6th", "Union Square", "3rd", "1st"],
  "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}
var stopsCount = 0;

// Takes a line key and returns the whole line array
// Example: given "N", returns ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
function getLineArray(key) {
  return lines[key];
}

// Returns the stops on the line I'm travelling on
// Needs the line you're travelling on, the start stop, the end stop
function getTripString(line, startStop, endStop) {
  var lineArray = getLineArray(line);
  var stopsString = "";
  var startIndex = lineArray.indexOf(startStop); // index should be 0
  var endIndex = lineArray.indexOf(endStop); // index should be 3
  var stopsString = "";

  // Going forward
  if (startIndex < endIndex) {
    for (var i = startIndex; i <= endIndex; i++) {
      stopsString += lineArray[i] + ",";
      stopsCount++;
    }
  } else {
    for (var j = startIndex; j >= endIndex; j--) {
      stopsString += lineArray[j] + ",";
      stopsCount++;
    }
  }

  stopsString = stopsString.replace(/.$/, ".");
  return stopsString;
}

// Plans trip initially
function planTrip(startLine, startStop, endLine, endStop) {
  // Travelling on the same line
  if (startLine === endLine) {
    console.log("You must travel on the following stops on the " + startLine + " line: " + getTripString(startLine, startStop, endStop));
  } else {
    console.log("You must travel on the following stops on the " + startLine + " line: " + getTripString(startLine, startStop, "Union Square"));
    console.log("Change at Union Square.");
    console.log("Your journey continues through the following stops: " + endLine + " line: " + getTripString(endLine, "Union Square", endStop));

    // Fixes double counting US
    stopsCount--;
  }
  console.log(stopsCount + " stops in total.")
}

// planTrip("N", "8th", "N", "Times Square");
planTrip("L", "8th", "N", "8th");
// planTrip("N", "Times Square", "6", "33rd");

