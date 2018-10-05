var lines = [
    {
        name: 'N',
        stops: [
            "Times Square",
            "34th",
            "28th",
            "23rd",
            "Union Square",
            " 8th"
        ]
    },
    {
        name: 'L',
        stops: [
            "8th",
            "6th",
            "Union Square",
            "3rd",
            "1st"
        ]
    },
    {
        name: '6',
        stops: [
            "Grand Central",
            "33rd",
            "28th",
            "23rd",
            "Union Square",
            "Astor Place"
        ]
    }
];
var arr1 = []; var num1, num2, str = "";
function indexof(name) {
    for (i = 0; i < lines.length; i++) {
        if (lines[i].name === name) {
            return i;
        }
    }
}
function compare(arr, num1, num2) {
    str = "";
    if (num1 > num2) {
        arr1 = arr.slice(num2, num1);
        for (var i = arr1.length - 1; i >= 0; i--) {
            str += " " + arr1[i];
        }
    }
    else {
        arr1 = arr.slice(++num1, ++num2);
        for (var i = 0; i < arr1.length; i++) {
            str += " " + arr1[i];
        }
    }

}
function planTrip(lineIn, stopIn, lineOut, stopOut) {
    var source = lines[indexof(lineIn)].stops.indexOf(stopIn);
    var destnation = lines[indexof(lineOut)].stops.indexOf(stopOut);
    var crossStop1 = lines[indexof(lineIn)].stops.indexOf("Union Square");
    var crossStop2 = lines[indexof(lineOut)].stops.indexOf("Union Square");
    if (lineIn === lineOut) {
        compare(lines[indexof(lineIn)].stops, source, destnation);

        console.log("You must travel through the following stops on the " +
            lineIn + " line: " + str);
        console.log(arr1.length + " stops in total.");
    }
    else {
        compare(lines[indexof(lineIn)].stops, source, crossStop1);
        console.log("You must travel through the following stops on the " +
            lineIn + " line: " + str);
        console.log("Change at Union Square.");
        num1 = arr1.length;
        compare(lines[indexof(lineOut)].stops, crossStop2, destnation);
        console.log("Your journey continues through the following stops: " + str);
        num1 += arr1.length
        console.log(num1 + " stops in total.");
    }
}
planTrip("6", "33rd", "6", "Union Square");
planTrip("N", "Times Square", "6", "33rd");
planTrip("L", "1st", "6", "Astor Place");
