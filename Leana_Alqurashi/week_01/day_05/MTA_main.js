var stops = 0; // Stops Counter
var index = 0, index2 = 0; // keep track of index
var Trip = ["6", "Astor Place", "N", "Times Square"]; //user's input saved in an array
var path = []; // trip path saved in array
var uS = "Union Square";
//lines
var LineN = ["Times Square", "34th", "28th", "23rd", uS, "N-8th"];
var LineL = ["L-8th", "6th", uS, "L-3rd", "1st"];
var LineSix = ["Grand Central", "33rd", "8th", "6-3rd", uS, "Astor Place"];
function search(input) {
    if (input[0] === "N") {
        if (LineN.includes(input[1])) {
            index = LineN.indexOf(input[1]);
            stops = stops + (index + 1);
            for (var i = 0; i <= index; i++) {
                path.push(LineN[i]);
            } //call function here 
            lookupN(input);
            //searchTwo(input);
        } else {
            index = LineN.indexOf(uS);
            stops = stops + (index + 1);
            for (var ii = 0; ii <= index; ii++) {
                path.push(LineN[ii]);
            }
        }

    } else if (input[0] === "L") {
        if (LineL.includes(input[1])) {
            index = LineL.indexOf(input[1]);
            stops = stops + (index + 1);
            for (var il = 0; il <= index; il++) {
                path.push(LineL[il]);
            }
            lookupL(input);

        }
        else {
            index = LineL.indexOf(uS);
            stops = stops + (index + 1);
            for (lii = 0; lii <= index; lii++) {
                path.push(LineL[lii]);
            }
        }
    } else if (input[0] === "6" || input[0] === "six") {
        if (LineSix.includes(input[1])) {
            index = LineSix.indexOf(input[1]);
            stops = stops + (index + 1);
            for (var il = 0; il <= index; il++) {
                path.push(LineSix[il]);
            }
            function lookupL(input) {
                if (LineL.includes(input[2])) {
                    index = LineL.indexOf(input[1]);
                    index2 = LineL.indexOf(input[2]);
                    stops = stops + (index2 - index);
                    for (var i = index + 1; i <= index2; i++) {
                        path.push(LineL[i]);

                    }
                } else if (input[2] === "N") {
                    if (LineN.includes(input[3])) {
                        index = LineL.indexOf(input[1]);
                        index2 = LineL.indexOf(uS);

                        if (index > index2) {
                            stops = stops + (index - index2);
                        } else { stops = stops + (index2 - index); }
                        for (var i = index + 1; i <= index2; i++) {
                            path.push(LineL[i]);

                        }
                        index2 = LineN.indexOf(uS);
                        index = LineN.indexOf(input[3]);
                        if (LineL.indexOf(uS) > LineL.indexOf(input[1])) {

                            stops = stops + (index2 - index);

                            for (var i = index2 - 1; i >= index; i--) {
                                path.push(LineN[i]);

                            }
                        } else {
                            for (var i = index2; i >= index; i--) {
                                path.push(LineN[i]);
                            }
                            stops = stops + (index2 - index);
                        }

                    }
                } else if (input[2] === "6" || input[2] === "six") {
                    if (LineSix.includes(input[3])) {
                        index = LineL.indexOf(input[1]);
                        index2 = LineL.indexOf(uS);
                        if (index > index2) {
                            stops = stops + (index - index2);
                        } else { stops = stops + (index2 - index); }
                        for (var i = index + 1; i <= index2; i++) {
                            path.push(LineL[i]);

                        }
                        index2 = LineSix.indexOf(uS);
                        index = LineSix.indexOf(input[3]);
                        if (LineL.indexOf(uS) > LineL.indexOf(input[1])) {

                            stops = stops + (index2 - index);

                            for (var i = index2 - 1; i >= index; i--) {
                                path.push(LineSix[i]);

                            }
                        } else {
                            for (var i = index2; i >= index; i--) {
                                path.push(LineSix[i]);
                            }
                            stops = stops + (index2 - index);
                        }

                    }
                }
            } lookupSix(input);
        } else {
            index = LineSix.indexOf(uS);
            stops = stops + (index + 1);
            for (lii = 0; lii <= index; lii++) {
                path.push(LineSix[lii]);
            }
        }
    }

    document.write(stops + "<br>");
    document.write(path);
}

function lookupN(input) {
    if (LineN.includes(input[2])) {
        index = LineN.indexOf(input[1]);
        index2 = LineN.indexOf(input[2]);
        stops = stops + (index2 - index);
        for (var i = index + 1; i <= index2; i++) {
            path.push(LineN[i]);

        }
    } else if (input[2] === "L") {
        if (LineL.includes(input[3])) {
            index = LineN.indexOf(input[1]);
            index2 = LineN.indexOf(uS);

            if (index > index2) {
                stops = stops + (index - index2);
            } else { stops = stops + (index2 - index); }
            for (var i = index + 1; i <= index2; i++) {
                path.push(LineN[i]);

            }
            index2 = LineL.indexOf(uS);
            index = LineL.indexOf(input[3]);
            if (LineN.indexOf(uS) > LineN.indexOf(input[1])) {

                stops = stops + (index2 - index);

                for (var i = index2 - 1; i >= index; i--) {
                    path.push(LineL[i]);

                }
            } else {
                for (var i = index2; i >= index; i--) {
                    path.push(LineL[i]);
                }
                stops = stops + (index2 - index);
            }

        }
    } else if (input[2] === "6" || input[2] === "six") {
        if (LineSix.includes(input[3])) {
            index = LineN.indexOf(input[1]);
            index2 = LineN.indexOf(uS);
            if (index > index2) {
                stops = stops + (index - index2);
            } else { stops = stops + (index2 - index); }
            for (var i = index + 1; i <= index2; i++) {
                path.push(LineN[i]);

            }
            index2 = LineSix.indexOf(uS);
            index = LineSix.indexOf(input[3]);
            if (LineN.indexOf(uS) > LineN.indexOf(input[1])) {

                stops = stops + (index2 - index);

                for (var i = index2 - 1; i >= index; i--) {
                    path.push(LineSix[i]);

                }
            } else {
                for (var i = index2; i >= index; i--) {
                    path.push(LineSix[i]);
                }
                stops = stops + (index2 - index);
            }

        }
    }
}

function lookupL(input) {
    if (LineL.includes(input[2])) {
        index = LineL.indexOf(input[1]);
        index2 = LineL.indexOf(input[2]);
        stops = stops + (index2 - index);
        for (var i = index + 1; i <= index2; i++) {
            path.push(LineL[i]);

        }
    } else if (input[2] === "N") {
        if (LineN.includes(input[3])) {
            index = LineL.indexOf(input[1]);
            index2 = LineL.indexOf(uS);

            if (index > index2) {
                stops = stops + (index - index2);
            } else { stops = stops + (index2 - index); }
            for (var i = index + 1; i <= index2; i++) {
                path.push(LineL[i]);

            }
            index2 = LineN.indexOf(uS);
            index = LineN.indexOf(input[3]);
            if (LineL.indexOf(uS) > LineL.indexOf(input[1])) {

                stops = stops + (index2 - index);

                for (var i = index2 - 1; i >= index; i--) {
                    path.push(LineN[i]);

                }
            } else {
                for (var i = index2; i >= index; i--) {
                    path.push(LineN[i]);
                }
                stops = stops + (index2 - index);
            }

        }
    } else if (input[2] === "6" || input[2] === "six") {
        if (LineSix.includes(input[3])) {
            index = LineL.indexOf(input[1]);
            index2 = LineL.indexOf(uS);
            if (index > index2) {
                stops = stops + (index - index2);
            } else { stops = stops + (index2 - index); }
            for (var i = index + 1; i <= index2; i++) {
                path.push(LineL[i]);

            }
            index2 = LineSix.indexOf(uS);
            index = LineSix.indexOf(input[3]);
            if (LineL.indexOf(uS) > LineL.indexOf(input[1])) {

                stops = stops + (index2 - index);

                for (var i = index2 - 1; i >= index; i--) {
                    path.push(LineSix[i]);

                }
            } else {
                for (var i = index2; i >= index; i--) {
                    path.push(LineSix[i]);
                }
                stops = stops + (index2 - index);
            }

        }
    }
}
function lookupSix(input) {
    if (LineSix.includes(input[2])) {
        index = LineSix.indexOf(input[1]);
        index2 = LineSix.indexOf(input[2]);
        stops = stops + (index2 - index);
        for (var i = index + 1; i <= index2; i++) {
            path.push(LineSix[i]);

        }
    } else if (input[2] === "N") {
        if (LineN.includes(input[3])) {
            index = LineSix.indexOf(input[1]);
            index2 = LineSix.indexOf(uS);

            if (index > index2) {
                stops = stops + (index - index2);
            } else { stops = stops + (index2 - index); }
            for (var i = index + 1; i <= index2; i++) {
                path.push(LineSix[i]);

            }
            index2 = LineN.indexOf(uS);
            index = LineN.indexOf(input[3]);
            if (LineSix.indexOf(uS) > LineSix.indexOf(input[1])) {

                stops = stops + (index2 - index);

                for (var i = index2 - 1; i >= index; i--) {
                    path.push(LineN[i]);

                }
            } else {
                for (var i = index2; i >= index; i--) {
                    path.push(LineN[i]);
                }
                stops = stops + (index2 - index);
            }

        }
    } else if (input[2] === "L") {
        if (LineSix.includes(input[3])) {
            index = LineSix.indexOf(input[1]);
            index2 = LineSix.indexOf(uS);
            if (index > index2) {
                stops = stops + (index - index2);
            } else { stops = stops + (index2 - index); }
            for (var i = index + 1; i <= index2; i++) {
                path.push(LineSix[i]);

            }
            index2 = LineL.indexOf(uS);
            index = LineL.indexOf(input[3]);
            if (LineSix.indexOf(uS) > LineSix.indexOf(input[1])) {

                stops = stops + (index2 - index);

                for (var i = index2 - 1; i >= index; i--) {
                    path.push(LineL[i]);

                }
            } else {
                for (var i = index2; i >= index; i--) {
                    path.push(LineL[i]);
                }
                stops = stops + (index2 - index);
            }

        }
    }
}

search(Trip);

