console.log('starter2.js linked');

//code goes here

$(document).ready(function () {

    //Generate an array with the numbers ['zone-1', 'zone-2', 'zone-3', 'zone-4']
    var arrayNumber = ['zone-1', 'zone-2', 'zone-3', 'zone-4'];
    var randomArray = ['zone-4', 'zone-2', 'zone-1', 'zone-3']

    ////When you ENTERS on a zone it locks its color to GREEN.
    function changeGreenEnter() {
        $(this).css('background-color', 'green');
    }

    //When you LEAVE on a zone it locks its color to WHITE.
    function changeWhite() {
        $(this).css('background-color', 'white')
    }
    // hover over a zone turn GREEN if it is the next one that needs to be clicked and turn RED if it is not.
    function checkingNext() {

    }
    //When a correct zone is clicked it should stay green
    function changeGreenClick() {
        $(this).css('background-color', 'green');
    }
    //Clicking on an incorrect zone should do nothing.
    function changeClickWrong() {
        $(this).css('background-color', 'white');
    }
    function whenAllGreen() {
        //check if all boxes are green check #zone-[index]
        if ($('#zone-1')[0].style.background === 'green' && $('#zone-2')[1].style.background === 'green' && $('#zone-3')[2].style.background === 'green' && $('#zone-4')[3].style.background === 'green') {
            //console.log("congratulations!!!");  //AND this does NOT work
        }
        console.log("congratulations!!!");
        //display congratulations everytime a box is clicked
    }
    //asigning and calling functions 
    $('.zone').on("mouseenter", changeGreenEnter);
    $('.zone').on("click", changeGreenClick);
    $('.zone').on("click", changeClickWrong);
    $('.zone').on("mouseleave", changeWhite);
    $('.zone').on("click", whenAllGreen);

}) 