/*
Generate an array with the numbers ['zone-1', 'zone-2', 'zone-3', 'zone-4'] in a random order - you do not need some shuffling function, just randomize it by hand. This will determine the order in which you need to click the zones.
The zones start with no background color.
When you hover over a zone it should turn green if it is the next one that needs to be clicked and turn red if it is not.
When a correct zone is clicked it should stay green
Clicking on an incorrect zone should do nothing.
When all zones are green, log a statement of congratulations to the console!
*/
$(document).ready(function all() {

    var array = ['zone-1', 'zone-2', 'zone-3', 'zone-4'];
    randomIndex = Math.floor(Math.random() * (array.length));
    //(array.length - 1);
    //Math.floor(Math.random *
    console.log(randomIndex);
    //console.log($(".zone").getClass());
    $("div.zone").find(".zone").css("background-color", "red");
    $(".zone").hover(function b() {
        var isHovered = $("#" + array[0]).is(":hover");
        if (isHovered) {
            console.log("green");
            $("#" + array[0]).css("background-color", "green");
        } else { $("#" + array[0]).css("background-color", "red"); }

    });
})
