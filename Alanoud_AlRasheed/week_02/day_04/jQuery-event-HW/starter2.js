console.log('starter2.js linked');

//code goes here
$(function () {

    var zones = ['zone-1', 'zone-2', 'zone-3', 'zone-4'];

    var shuffle = function (a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    zones = shuffle(zones);

    ////////

    var i = 4;

    $('.zone').each(function () {
        $(this).attr('id', zones[i - 1])
        i--;
    })




    ////////


    $('.zone').on('click', function (event) {

        if ($(this).is('#zone-1')) {
            $(this).off("mouseleave");
            $(this).addClass('green');
            winFunction();
        } else if ($(this).is('#zone-2') && $('#zone-1').hasClass('green')) {
            $(this).off("mouseleave");
            $(this).addClass('green');
            winFunction();
        } else if ($(this).is('#zone-3') && $('#zone-2').hasClass('green')) {
            $(this).off("mouseleave");
            $(this).addClass('green');
            winFunction();
        } else if ($(this).is('#zone-4') && $('#zone-3').hasClass('green')) {
            $(this).off("mouseleave");
            $(this).addClass('green');
            winFunction();
        }

    });


    $('.zone').on('mouseenter', function (event) {

        if ($('#zone-1').hasClass('green') === false) {
            if ($(this).is('div #zone-1')) {
                $(this).addClass('green');
            } else if ($(this).is($('div #zone-1').next())) {
                $(this).addClass('green');
            } else if ($(this).is($('div #zone-1').prev())) {
                $(this).addClass('green');
            } else {
                $(this).addClass('red');
            }
        } else if ($('#zone-1').hasClass('green') && $('#zone-2').hasClass('green') === false) {
            if ($(this).is('div #zone-2')) {
                $(this).addClass('green');
            } else if ($(this).is($('div #zone-2').next())) {
                $(this).addClass('green');
            } else if ($(this).is($('div #zone-2').prev())) {
                $(this).addClass('green');
            } else if ($(this).is('div #zone-1') === false) {
                $(this).addClass('red');
            }
        } else if ($('#zone-2').hasClass('green') && $('#zone-3').hasClass('green') === false) {
            if ($(this).is('div #zone-3')) {
                $(this).addClass('green');
            } else if ($(this).is($('div #zone-3').next())) {
                $(this).addClass('green');
            } else if ($(this).is($('div #zone-3').prev())) {
                $(this).addClass('green');
            } else if ($(this).is('div #zone-1') === false && $(this).is('div #zone-2') === false) {
                $(this).addClass('red');
            }
        } else if ($('#zone-3').hasClass('green') && $('#zone-4').hasClass('green') === false) {
            if ($(this).is('div #zone-4')) {
                $(this).addClass('green');
            }
        }

    });


    $('.zone').on('mouseleave', function (event) {
        $(this).removeClass('green');
        $(this).removeClass('red');
    });


    function winFunction() {
        var counter = 0;
        $('.zone').each(function (index) {
            if ($(this).hasClass('green')) {
                counter++;
            }
            if (counter === 4) {
                var $winner = $("<h2/>").text("congratulations!");
                $(".container").append($winner);
                console.log('Congratulations!');
            }
        });
    }


});