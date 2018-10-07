
// This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
var line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
var stops = [];
var stops2 = [];
var count = 0;
var unionstop = "Union Square";

function planTrip(getOnLine, getOnStop, getOffLine, getOffStop) {

    var firstLine = chooseLine(getOnLine);
    var lastLine = chooseLine(getOffLine);
    var firstStop = firstLine.indexOf(getOnStop);
    var lastStop = lastLine.indexOf(getOffStop);
    

    if (firstLine === lastLine) {

        var i = firstStop;
        if (i < lastStop) {
            for (i++; i <= lastStop; i++) {
                stops.push(firstLine[i]);
            }
        } else if (i > lastStop) {
            for (i--; i >= lastStop; i--) {
                stops.push(lastLine[i]);
            }
        }
        console.log("You must travel through the following stops on the " + getOnLine +
            " line: " + stops);
        console.log("The total of stops: " + stops.length);

    } else if (firstLine !== lastLine) {
       
    twoLines(getOnLine, firstStop, "Union Square");
    twoLines(getOffLine, "Union Square", lastStop);
    console.log("The total of stops: " + count);
}
}


function chooseLine(lineArray) {
    if (lineArray === "N") {
        return lineN;
    } else if (lineArray === "L") {
        return lineL;
    } else if (lineArray === "6") {
        return line6;
    }
}

function twoLines(line, start, end) {
    var theLine = chooseLine(line);
    var firstStop = theLine.indexOf(start);
    var lastStop = theLine.indexOf(end);
   
    var i = firstStop; 

    if (end === unionstop){
    if (i < lastStop) {
        for (i++; i <= lastStop; i++) {
            stops.push(theLine[i]);
            count++;
        }
                console.log("You must travel through the following stops on the " + line +
                    " line: " + stops);
                    console.log(" Change at Union Square.");
                return;    
        }

     else if (i > lastStop) {
        for (i--; i >= lastStop ; i--) {
            stops.push(theLine[i]);
            count++;
        }
                console.log("You must travel through the following stops on the " + line +
                    " line: " + stops);
                console.log(" Change at Union Square.");
                
                return;
            
        }
        }else if (start === unionstop){
            if (i < lastStop){
            for (i++ ; i <= lastStop; i++) {
                stops2.push(theLine[i]);
                count++;
            }
             console.log("Your journey continues through the following stops: " + stops2);
               return;
                
            }
    
         else if (i > lastStop) {
            for (i--; i >= lastStop ; i--) {
                stops2.push(theLine[i]);
                count++;
            }
            console.log("Your journey continues through the following stops: " + stops2);
            return;
                
            } 
        }
    
    }
 var sLine = prompt("what is your get on line?");   
 var sStop = prompt("what is your get on point?");   
 var eLine = prompt("what is your get off line?");   
 var eStop = prompt("what is your get off stop?");   

planTrip(sLine, sStop, eLine, eStop);
// planTrip("N", "Times Square", "L", "3rd"); 