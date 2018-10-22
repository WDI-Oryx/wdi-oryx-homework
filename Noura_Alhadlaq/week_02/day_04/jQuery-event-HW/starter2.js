$(function () {
    console.log('starter2.js linked');

    //code goes here

    //Generate an array with the numbers 
    //['zone-1', 'zone-2', 'zone-3', 'zone-4'] in a random order 

    var $zones = ['zone-2', 'zone-1', 'zone-4', 'zone-3'];
    var count = 0;

    function whichZone(zone) {
        var zoneId = $(zone).attr("id");
        return zoneId;
    }



    $(".zone").on("mouseenter", function (event) {
        var zone = whichZone(this);
        if (zone == $zones[count]) {
            $(this).css("backgroundColor", "green");

        } else {
            $(this).css("backgroundColor", "red");

        }
    })

    $(".zone").on("mouseleave", function (event) {
        $(this).css("backgroundColor", "white");
    });

    $(".zone").on("click", function (event) {
        var zone = whichZone(this);
        if (count === 4) {
            //console.log("congratulations!!!!");
            alert("Congratulations");}
            else if (zone === $zones[count]) {
                //$(".zone").off("mouseenter");
                $(".zone").off("mouseleave");

                $(this).css("backgroundColor", "green");
    
                count++;
            } else {
               // $(".zone").off("mouseleave");
                $(this).css("backgroundColor", "white");

            }
           
        });

})



