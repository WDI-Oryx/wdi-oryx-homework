$(document).ready(function () {
    var turn = 1;
    var xMoves = [];
    var oMoves = [];
    $(".content").hide();
    $("table").hide();
    $('.announce').hide();

    var ctx = document.querySelector("canvas").getContext("2d"),
        dashLen = 220, dashOffset = dashLen, speed = 15,
        txt = "Tic - Tac - Toe", x = 0, i = 0;

    ctx.font = "90px Chalkduster, fantasy, cursive, TSCu_Comic, sans-serif";
    ctx.lineWidth = 1; ctx.lineJoin = "round"; ctx.globalAlpha = 2 / 3;
    ctx.strokeStyle = ctx.fillStyle = "thistle";

    (function loop() {
        ctx.clearRect(x, 0, 60, 150);
        ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
        dashOffset -= speed;                                         // reduce dash length
        ctx.strokeText(txt[i], x, 90);                               // stroke letter

        if (dashOffset > 0) requestAnimationFrame(loop);             // animate
        else {
            ctx.fillText(txt[i], x, 90);                               // fill final letter
            dashOffset = dashLen;                                      // prep next char
            x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
            ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
            ctx.rotate(Math.random() * 0.005);                         // random rotation
            if (i < txt.length) requestAnimationFrame(loop);
        }
    })();
    setTimeout(showContent, 600);
    setInterval(playresize, 300);
    function showContent() {
        $(".content").show(4000);
    }
    function playresize() {
        $(".go").toggleClass("go2");
    }
    $("#play").click(function () {
        // $("canvas").hide("slow");

        $("canvas").css({ "width": "150px", "font-size": "30px" });


        $(".content").hide("slow");
        $("table").show(2000);
        $('.announce').css({
            left: '580px',
            top: '250px',
            width: 0,
            height: 0
        });
        var $instruction = $("<h2/>").text("click anywhere in the game board to start").css({ "font-size": "20px" });
        $instruction.appendTo(".instruction");
        setTimeout(hideIt, 5000);

        function hideIt() {
            $(".instruction").hide("slow");
        }

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
            var what = checkWinner(xMoves, oMoves);//when there are 5 inputs there is a possibility of a winner, check for winner here
            if (turn > 5 && turn < 10) {
                console.log("x moves = " + xMoves);
                console.log("o moves = " + oMoves);
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
                if (what === "tie") { $("h2").text(what.toUpperCase()); } else { $("h2").text("The winner is: " + what); }
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
        $(".again").click(function () {
            location.reload();
        })
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






    })
});