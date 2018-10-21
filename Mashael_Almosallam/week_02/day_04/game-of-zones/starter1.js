console.log('starter1.js linked');

//code goes here

$(document).ready(function () {
    ////When you ENTERS on a zone it locks its color to GREEN.
    function changeGreenEnter() {
        $(this).css('background-color', 'green');
    }

    //When you LEAVE on a zone it locks its color to WHITE.
    function changeWhite() {
        $(this).css('background-color', 'white')
    }
    //When you CLICK on a zone it locks its color to GREEN.
    function changeGreenClick() {
        $(this).unbind("mouseleave");
        $(this).css('background-color', 'green');

        //check if all boxes are green check #zone-[index]
        if ($('#zone-1')[0].style.background === 'green' && $('#zone-2')[1].style.background === 'green' && $('#zone-3')[2].style.background === 'green' && $('#zone-4')[3].style.background === 'green') {
            //console.log("congratulations!!!");  //AND this does NOT work
        }
        when
        console.log("congratulations!!!");
        //display congratulations everytime a box is clicked
    }
    $('.zone').on("mouseenter", changeGreenEnter);
    $('.zone').on("click", changeGreenClick);
    $('.zone').on("mouseleave", changeWhite);
})
