console.log('starter2.js linked');

//code goes here
$(document).ready(function () {
    console.log("jQ Connected");

    var zoneArray = ["zone-4", "zone-1", "zone-2", "zone-3"];
    var counter = 0;
    var index = 1;

    var indexes = {
        1: zoneArray.indexOf("zone-1"),
        2: zoneArray.indexOf("zone-2"),
        3: zoneArray.indexOf("zone-3"),
        4: zoneArray.indexOf("zone-4"),
    };

    // Change the zones ids
    // Change the ids' values to make them not equal to the previous ones to avoid conflict
    for (var i = 1; i <= 4; i++) {
        $("#zone-" + i).attr("id", "zone-" + i * 5);
    }
    // Change the ids' values to be equal to the array elements
    for (var j = 1; j <= 4; j++) {
        $("#zone-" + j * 5).attr("id", zoneArray[j - 1]);
    }

    // Mouse enters the zone
    $(".zone").on("mouseenter", function () {
        if (this.id === zoneArray[indexes[index]]) {
            $("#" + this.id).addClass("green");
        } else {
            $("#" + this.id).addClass("red");

        }
    })

    // Mouse leaves the zone
    $(".zone").on("mouseleave", function () {
        $("#" + this.id).removeClass("green");
        $("#" + this.id).removeClass("red");
    });

    // A zone is clicked
    $(".zone").on("click", function () {
        if (this.id === zoneArray[indexes[index]]) {
            $("#" + this.id).off("mouseleave");
            $("#" + this.id).removeClass("red");
            $("#" + this.id).addClass("green");
            $("#" + this.id).off("mouseenter");
            $("#" + this.id).off("click");
            counter++;
            index++;
        }
        if (counter === 4) {
            console.log("Congratulations");
        }
    })
});