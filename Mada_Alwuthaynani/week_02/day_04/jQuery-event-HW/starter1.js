var num = 0;
$(function () {
    $('.zone').on('mouseover mouseleave', function (event) {
        $(this).toggleClass('green');
    })
});
$(function () {
    $('.zone').on('click', function (event) {
        $(this).off();
        num++;
        if (num === 4) {
            console.log("congrats");
        }
    })
});
