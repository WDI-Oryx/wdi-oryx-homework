console.log('starter1.js linked');

//code goes here game 1
$(function () {
    var $theBox = $('.zone');
    var $main = $('.container');
    $theBox.on('mouseenter', function () {
        console.log("mouse enter");
        $(this).css('background-color', 'green');
    })
    $theBox.on('mouseleave', function () {
        console.log("mouse leave");
        $(this).css('background-color', '');

    })
    $theBox.on('click', function () {
        console.log("clicked");
        $(this).css('background-color', 'green');
        //Remove event Listener
        $(this).off('mouseleave');

    })
    // debugger;
    //rgba(0,255,0,0)
    // if ($('.zone').css('background-color') === 'green') {
    //     console.log('congrats');
    // }
    // console.log($main.find('*').css());
})
