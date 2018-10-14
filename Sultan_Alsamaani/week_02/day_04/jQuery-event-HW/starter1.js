// console.log('starter1.js linked');

//code goes here

$(function () {

    // .off(
    function setBackgroundToGreen() {
        // debugger;
        $(this).css('background', "green");
    }
    function setBackgroundToGreenClicked() {

        $(this).off();
// debugger;
        $(this).css('background', "green");
        if ($('#zone-1')[0].style.background==='green'&&$('#zone-2')[0].style.background==='green'&&$('#zone-3')[0].style.background==='green'&&$('#zone-4')[0].style.background==='green') {
            console.log("congratulations");
        }
    }

    function setBackgroundToWhite() {
        $(this).css('background', "white");
    }
    $('.container .zone').on("mouseenter", setBackgroundToGreen);
    $('.container .zone').on("click", setBackgroundToGreenClicked);
    $('.container .zone').on("mouseleave", setBackgroundToWhite);


})