console.log('starter1.js linked');

//code goes here
// turnGreen.addEventListener('click', ".zone", true);
// $(function turnGreen() {
//     // $(".zone").css("background-color", "green");
//     console.log("hi");
// });
// var divZone = $("div.zone")
// $(function () {
//     divZone.addEventListener('click', function () {
//         $(".zone").css("background-color", "green");
//     }, true);

// })
// create a function that allows you to change the background color
// when it mouse enters change background to green
// when it leaves change it back
// use click to lock the color
// when all is clicked log congratulations


var zone = $(".zone");
$(function turnGreen() {
    $(zone).on("mouseenter", function () {
        $(".zone").css("background-color", "green");
    });
    $(zone).on("mouseleave", function () {
        $(".zone").css("background-color", "white")
    });
    $("#zone-1").on("click", function () {
        $("#zone-1").css("background-color", "green")
    });
});
// $(function turnNormal() {
// });

        // $(zone).on("mouseleave", function () {
        //     $("turnGreen").remove();
        // })