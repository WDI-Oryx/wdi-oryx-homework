var lineN = ["TS", "34", "28lineN", "23lineN", "US", "8lineN"];
var lineL = ["8lineL", "6", "US", "3", "1"];
var line6 = ["GC", "33", "28line6", "23line6", "US", "AP"];
var stringLine = "";
var secStringline = "";
var mainPoint = "US";
function trip(line, startingPoint, lineTwo, stopingPoint) {
    // console.log(line.indexOf(startingPoint) +" "+ lineTwo.indexOf(stopingPoint));
    if (line.indexOf(startingPoint) > lineTwo.indexOf(stopingPoint)) {
        backward(line, startingPoint, lineTwo, stopingPoint);
    } else {
        forward(line, startingPoint, lineTwo, stopingPoint);
    }
}
trip(lineN, "TS", line6, "33");

function forward(L, SP, LT, SOP) {
    // console.log(L + " "+SP +" "+ LT + " "+SOP + " TESTING");
    // debugger;
    var fIndex = L.indexOf(SP) + 1;
    for (var i = fIndex; i < L.length; i++) {
        if (L !== LT && stringLine.endsWith(mainPoint)) {
            var secIndex = LT.indexOf(mainPoint) - 1;
            // console.log(secIndex);
            for (var i = secIndex; i >= LT.indexOf(SOP); i--) {
                secStringline += " " + LT[i];
                // console.log(secStringline);
            }
            for (var i = secIndex; i <= LT.indexOf(SOP); i++) {
                secStringline += " " + LT[i];
            }
            break;
        } else if (stringLine.endsWith(mainPoint)) {
            var secIndex = L.indexOf(mainPoint) + 1;
            for (var i = secIndex; i < L.length; i++) {
                secStringline += " " + L[i];
            }
            if (SOP === L[i]) {
                stringLine += " " + L[i];
                break;
            }
        }
        stringLine += " " + L[i];
    }
    console.log("You must travel through the following stops on the line: " + stringLine);
    console.log("Change at " + mainPoint);
    console.log("Your journey continues through the following stops: " + secStringline);
}
function backward(L, SP, LT, SOP) {
    // debugger;
    var bIndex = L.indexOf(SP) -1;
    for (var i = bIndex; i >= L.indexOf(SOP); i--) {
        if (stringLine.endsWith(mainPoint)) {
            // console.log("US POINT");
            var baIndex = LT.indexOf(mainPoint) -1;
            for (var i = baIndex; i >= LT.indexOf(SOP); i--) {
                secStringline += " " + LT[i];
            }
        }
        stringLine += " " + L[i];
    }
    console.log("You must travel through the following stops on the line: " + stringLine);
    console.log("Change at " + mainPoint);
    console.log("Your journey continues through the following stops: " + secStringline);
}