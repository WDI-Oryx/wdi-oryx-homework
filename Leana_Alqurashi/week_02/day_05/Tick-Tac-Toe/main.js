$(document).ready(function () {
    //let Player X start at turn one then player O start in turn two 
    //put X wherever player X clicks and O wherever Player O clicks
    var turn = 1;
    var xMoves = [];
    var oMoves = [];
    $('.announce').hide();
    $('.announce').css({
        left: '580px',
        top: '250px',
        width: 0,
        height: 0
    });
    $("table tr td").on("click", function game() {
        if (!$(this).hasClass()) {

            if (turn % 2 == 1) {
                $(this).text("X");
                $(this).addClass("positionX");
                xMoves.push(parseInt($(this).attr('id')));
            }
            else {
                $(this).text("O");
                $(this).addClass("positionO");
                oMoves.push(parseInt($(this).attr('id')));
            }
            $(this).off("click");
        } turn++;
        //when there are 5 inputs there is a possibility of a winner, check for winner here
        if (turn > 5 && turn < 10) {
            console.log("x moves = " + xMoves);
            console.log("o moves = " + oMoves);
            var what = checkWinner(xMoves, oMoves);
            if (what !== "tie") {
                console.log("The winner is: " + what);
                $("h2").text("The winner is: " + what);
                $(".announce").show();
                $(".announce").animate({
                    left: '380px',
                    top: '200px',
                    width: '400px',
                    height: '100px',
                    opacity: 1
                });
                $("table tr td").off("click");
            }
        }


        else if (turn === 10) {
            console.log("tie");
            $("h2").text("Tie!");
            $(".announce").show();
            $(".announce").animate({
                left: '380px',
                top: '200px',
                width: '400px',
                height: '100px',
                opacity: 1
            });
            $("table tr td").off("click");
        }
    });
    function checkWinner(playerOne, playerTwo) {
        console.log("check for winner");
        var tie = "tie";
        var who = "";
        var scoreOne = scenarios(playerOne);
        var scoreTwo = scenarios(playerTwo);
        if (scoreOne === scoreTwo) { return tie; }
        else if (scoreOne > scoreTwo) {
            who = "Player One";
            return who;
        }
        else {
            who = "Player Two";
            return who;
        }
    }
    //winning scenarios: [3, 6, 9] [7, 8, 9] [1, 2, 3] [1, 4, 7] [2, 5, 8] [3, 5, 7] [4, 5, 6] [1, 5, 9] 
    function scenarios(array) {
        var win = 1;
        var lose = 0;


        if (array.includes(5)) {
            if ((array.includes(1) && array.includes(9)) || (array.includes(2) && array.includes(8)) || (array.includes(3) && array.includes(7)) || (array.includes(4) && array.includes(6))) { return win; }
            else { return lose; }
        }
        else if (array.includes(1)) {
            if ((array.includes(2) && array.includes(3)) || (array.includes(4) && array.includes(7))) {
                return win;
            } else { return lose; }
        } else if (array.includes(3) && array.includes(9) && array.includes(6) || array.includes(7) && array.includes(8) && array.includes(9)) {
            return win;

        } else { return lose; }
    }

    var array = [3, 5, 9];
    scenarios(array);
});





























