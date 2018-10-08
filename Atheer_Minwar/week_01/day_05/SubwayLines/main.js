
var nLine = ["Time square","34th","28th-N", 
            "23rd","Union Square","8th-N"];

var lLine = [ "8th-L","6th","Union Square",
              "3rd", "1st"];

var sixthLine = ["Grand Central","33rd", "28th-6th",
             "23rd-6th","Union Square","Astor Place"];


var lineName = {
    nLine : ["Time square","34th","28th-N", 
             "23rd","Union Square","8th-N"],

    lLine : ["8th-L","6th","Union Square",
              "3rd", "1st"],
    sixthLine :["Grand Central","33rd", "28th-6th",
    "23rd-6th","Union Square","Astor Place"]

    };
var intersect = "Union Square";
var numbOfStops = 0 ; 
var lineOnNum = "";
var lineOffNum = "";

function subwayLine (lineOn,stopOn,lineOff,stopOff) {


}

    var currentLine = lineName.indexOf(lineOn);
    var endLine =lineName.indexOf(lineOff);

var singleForward = function (lineOn) {    //Single same line forward function 
if (lineOn === currentLine) {
 {
    for (var n = 0; n <currentLine.length; n++) {
        console.log(currentLine[n])  
    } 
}
}
var onelineTrip = singleForward;

var singleBackward = function  (lineOff) {    // Single same line backward function
     if (lineOff === endLine) {
        lineOff.reverse() 
        for (var n = 0; n < lineOff.length; n++) {
            console.log(lineOff[n]) 
    }
}


var oneLineBackward = singleBackward;


var partialForward = function (stopOff) {
if (stopOff === lineName[n].indexOf(stopOff)) {
var existingLine = lineName.indexOf(stopOff);
for (var s = 0; s < existingLine.length; s++) {  
    existingLine[s].splice(stopOff);
    console.log(existingLine(s));
}

}

};

var ChangeStop = function () {
if (stopOff === "Union Square"){
    console.log ("Change at union Square")

}
var lineMsg = function () {
    if (lineOn === lineOff) {
       console.log ("You must travel through the following stops on the" + lineOn ) 
    }

// partialForward("33rd");

}

