console.log('starter1.js linked');

//code goes here
$(function () {


    $('.zone').on('mouseenter', function (event) {
        $(this).addClass('green');
    });


    $('.zone').on('mouseleave', function (event) {
        $(this).removeClass('green');
    });


    $('.zone').on('click', function (event) {
        $(this).off("mouseleave");
        $(this).addClass('Green');
        check();
    });


    function check() {
        var counter = 0;
        $('.zone').each(function (index) {
            if ($(this).hasClass('Green')) {
                counter++;
            }
            if (counter === 4) {
                var $winner = $("<h2/>").text("congratulations!");
                $(".container").append($winner);
            }
        });
    }


});