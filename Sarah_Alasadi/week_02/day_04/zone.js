$(document).ready(function () {

    var zones = ['z1', 'z2', 'z3', 'z4']

    function turnGreen() {
        $(this).css('background-color', 'green');

    }

    function turnRed() {

        $(this).css('background-color', 'red');
    }

    function targetZone() {

        return zones[0];

    }


    function nextToTargetZone(zoneId) {
        return $(zoneId).next() === targetZone() || $(zoneId).prev() === targetZone();
    }

    $('.zone').on('mouseenter', function () {
        var zoneId = $(this).attr('id');

        var netToTarget = nextToTargetZone(zoneId);

        if (nextToTargetZone) {
            turnGreen($(this));
        } else {
            turnRed($(this));
        }

    });

});




/*
$(".zone").on("mouseenter", function () {
    $(" ").className = "green";
    var targetDiv = document.querySelector(".container");
    targetDiv.appendChild('.zone');

});





//zone1
$("#zone-1").on("mouseleave", function () {
    $(" " + this.id).removeClass("green");
});
//zone2
$("#zone-2").on("mouseleave", function () {
    $(" " + this).removeClass("green");
});
//zone2
$("#zone-3").on("mouseleave", function () {
    $(" " + this).removeClass("green");
});

//zone4
$("#zone-4").on("mouseleave", function () {
    $(" " + this).removeClass("green");
});



$(".zone").on("click", function () {

    $(" " + this).of("mouseenter");


    $(" " + this).of("click");

    /*for(i = 0;i<=zone.length;i++){
        console.log("Congratulations"); 
    } */

/*
    if ($B <= 4) {

        console.log('Congrat');
    }
})
});

*/



