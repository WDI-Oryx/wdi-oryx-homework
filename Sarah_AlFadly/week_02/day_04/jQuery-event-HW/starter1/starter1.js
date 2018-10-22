console.log('starter1.js linked');

//code goes here
$(document).ready(function () {
    console.log("jQ Connected");

    // Mouse enters the zone
    $(".zone").on("mouseenter", function () {
        $("#" + this.id).addClass("green");
    })

    // Mouse leaves the zone
    $(".zone").on("mouseleave", function () {
        $("#" + this.id).removeClass("green");
    });

    // A zone is clicked
    var $counter = 0;
    $(".zone").on("click", function () {
        $("#" + this.id).off("mouseenter");
        $("#" + this.id).off("mouseleave");
        $counter++;
        $("#" + this.id).off("click");
        if ($counter === 4) {
            console.log("Congratulations");
        }
    })
});