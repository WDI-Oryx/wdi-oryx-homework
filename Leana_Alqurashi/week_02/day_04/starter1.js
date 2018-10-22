/*
When the mouse enters any of the zones change its background color to green
When the mouse leaves a zone change its background color black
When you click on a zone it locks its color to green.
*/
$(document).ready(function all() {
    //code goes here
    //1. When the mouse enters any of the zones change its background color to green
    $(".zone").on("mouseenter", function enter() {
        $(this).css("background-color", "green ");
    })
    //When the mouse leaves a zone change its background color black
    $(".zone").on("mouseleave", function leave() {
        $(this).css("background-color", "black");
    })

    //3. When you click on a zone it locks its color to green.


    $(".zone").click(function () {

        $(this).off("mouseenter", all.enter);
        $(this).off("mouseleave", all.leave);
        $(this).css("background-color", "rgb(0, 128, 0)");
        /*
        4.When all zones are checked green, log a statement of congratulations to
         the console!
            - problem rgba change every time ??
         */
        var color = $(".zone").css("background-color");
        console.log(color);
        if (color == 'rgb(0, 128, 0)') {
            alert("congrats!");
        }
    })


})