/*
When the mouse enters any of the zones change its background color to green
When the mouse leaves a zone change its background color black
When you click on a zone it locks its color to green.
*/
$(document).ready(function () {
    //code goes here
    //1. When the mouse enters any of the zones change its background color to green
    $(".zone").on("mouseenter", function () {
        $(this).css("background-color", "green ");
    })
    //When the mouse leaves a zone change its background color black
    $(".zone").on("mouseleave", function () {
        $(this).css("background-color", "black");
    })

    //3.
    var $divzone = $(".zone");
    $divzone.click(function () {

        $(this).css("background-color", "green ");

    })


})