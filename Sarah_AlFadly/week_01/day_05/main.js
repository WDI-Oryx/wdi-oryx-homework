function planTrip(lineOn, stopOn, lineOff, stopOff) {
    var lines = {
        lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
        lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
        line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    };

    // Check if the user entered wrong line or stop
    if (!Object.keys(lines).includes("line" + lineOn) || !Object.keys(lines).includes("line" + lineOff) || !lines["line" + lineOn].includes(stopOn) || !lines["line" + lineOff].includes(stopOff)) {
        console.log("You have entered wrong line or stop");
        return;
    }

    var lineOnStart = lines["line" + lineOn].indexOf(stopOn);
    var lineOffEnd = lines["line" + lineOff].indexOf(stopOff);
    var totalStops = 0;

    // If the two lines are same
    if (lineOn === lineOff) {
        // Going forward
        if (lineOnStart < lineOffEnd) {
            for (var i = lineOnStart; i <= lineOffEnd; i++) {
                console.log(lineOn + "-" + lines["line" + lineOn][i]);
                totalStops++;
            }
        }
        // Going backwards
        else if (lineOnStart > lineOffEnd) {
            for (var i = lineOnStart; i >= lineOffEnd; i--) {
                console.log(lineOn + "-" + lines["line" + lineOn][i]);
                totalStops++;
            }
        }
    }
    // If the two lines are different 
    else if (lineOn !== lineOff) {
        var lineOnEnd = lines["line" + lineOn].indexOf("Union Square");
        // Going forward at the lineOn
        if (lineOnStart < lineOnEnd) {
            for (var i = lineOnStart; i <= lineOnEnd; i++) {
                console.log(lineOn + "-" + lines["line" + lineOn][i]);
                totalStops++;
            }
        }
        // Going backwards at the lineOn
        else if (lineOnStart > lineOnEnd) {
            for (var i = lineOnStart; i >= lineOnEnd; i--) {
                console.log(lineOn + "-" + lines["line" + lineOn][i]);
                totalStops++;
            }
        }
        var lineOffStart = lines["line" + lineOff].indexOf("Union Square");
        // Going forward at the lineOff
        if (lineOffStart < lineOffEnd) {
            for (var i = lineOffStart + 1; i <= lineOffEnd; i++) {
                console.log(lineOff + "-" + lines["line" + lineOff][i]);
                totalStops++;
            }
        }
        // Going backwards at the lineOff
        else if (lineOffStart > lineOffEnd) {
            for (var i = lineOffStart - 1; i >= lineOffEnd; i--) {
                console.log(lineOff + "-" + lines["line" + lineOff][i]);
                totalStops++;
            }
        }
    }
    console.log("Total number of stops = " + (totalStops - 1));
}

planTrip(prompt("Enter the line you are getting on"), prompt("Enter the stop you are getting on"), prompt("Enter the line you are getting off"), prompt("Enter the stop you are getting off"));

