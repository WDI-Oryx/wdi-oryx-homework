console.log('starter2.js linked');

$(document).ready(function () {

     var zoneArr= ["zone-3", "zone-2", "zone-4", "zone-1"];
     
    var counter = 0;
    var index = 1;
     var indexeZone = {
        1: zoneArray.indexOf("zone-1"),
        2: zoneArray.indexOf("zone-2"),
        3: zoneArray.indexOf("zone-3"),
        4: zoneArray.indexOf("zone-4"),
    };
    for (var i = 1; i <= 4; i++) {
        $("#zone-" + i).attr("id", "zone" + i * 5);
    }
    for (var j = 1; j <= 4; j++) {
        $("#zone-" + j * 5).attr("id", zoneArr[j - 1]);
    }
    $(".zone").on("mouseenter", function () {
        if (this.id == zoneArr[indexeZone[index]]) {
            $(this.id).addClass("green");
        } else {
            $(this.id).addClass("red");
         }
    })
    $(".zone").on("mouseleave", function () {
        $( this.id).removeClass("green");
        $(this.id).removeClass("red");
    });

        })
