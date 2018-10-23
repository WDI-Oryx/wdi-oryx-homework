console.log('starter2.js linked');
var arr = ['zone-4', 'zone-2', 'zone-3', 'zone-1'];
var num = 0;
var current = arr[num];
$(function () {
    $('.zone').on('mouseover mouseleave', function (event) {
        if ($(this).attr('id') === current) {
            $(this).toggleClass('green');
        }
        else {
            $(this).toggleClass('red');
        }
    })
});
$(function () {
    $('.zone').on('click', function (event) {
        if ($(this).attr('id') === current) {
            $(this).off();
            num++;
            if (num === 4) {
                console.log("congrats");
            }
            current = arr[num];
        }
    })
});
