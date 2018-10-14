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

var counter = 0;
if (counter === 4) {
    console.log("Congratulations!")
}
var zone = $(".zone");
$(function turnGreen() {
    $(zone).on("mouseenter", function () {
        $(this).addClass("green");
    });
    $(zone).on("mouseleave", function () {
        $(this).removeClass("green");

    });
    $(zone).on("click", function () {
        $(this).css("background-color", "green")
        counter++;
    });
});
// $(function turnNormal() {
// });

        // $(zone).on("mouseleave", function () {
        //     $("turnGreen").remove();
        // })