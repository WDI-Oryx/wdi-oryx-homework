console.log('starter1.js linked');

//code goes here

// var eventType = "click";

// function makeBoxGreen() {

//     console.log(makeBoxGreen);
//     makeBoxGreen.style.color = "green";
// }
// var boxOne = document.querySelector("#zone-1");
// boxOne.addEventListener("click", makeBoxGreen);

// var boxTwo = document.querySelector("#zone-2");
// boxTwo.addEventListener("click", makeBoxGreen);

// // var boxThree = document.querySelector("#xone-3");
// // boxThree.addEventListener("click", makeBoxGreen);

// var boxFour = document.querySelector("#zone-4");
// boxFour.addEventListener("click", makeBoxGreen);

$(document).ready(function () {

    $('.Zone').on('mouseenter', function (event) {
        $(this).addClass('green');
    })
    $('.zone').on('mouseleave', function (event) {
        $(this).removeClass('green');

    })


    $('.zone').on('click', function (event) {
        $(this).off('mouseleave');

        $(this).addClass('green');
        zoneColor();
    })

    function zoneColor() {

        var coloredBox = 0;

        $('.zone').each(function () {

            if ($(this).hasClass('green')) {

                coloredBox++;
            }

            if (coloredBox === 4) {

                var congratsMessage = $('<h2/>').text('congratulations!');

                $('.container').append(congratsMessage);
            }
        });
    }
    zoneColor();
});

