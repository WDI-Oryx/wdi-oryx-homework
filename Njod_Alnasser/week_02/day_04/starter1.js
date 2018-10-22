console.log('starter1.js linked');
//1-2-3
 $(function(){

    $(".zone").on("mouseenter", function (event) {
       $(this).addClass("green");
   });

    $(".zone").on("mouseleave", function (event) {
       $(this).removeClass("green");
   });

    $(".zone").on("click", function (event) {
       $(this).off("mouseleave");
       $(this).addClass("green");
       checkColor();
   });
//4

    function checkColor() {

       var count = 0;

       $(".zone").each(function () {

           if ($(this).hasClass("green")) {

               count++;
           }

           if (count== 4) {

               var message= $("<h2/>").text("congratulations!");

               $(".container").append($message);
           }
       });
   }
}); 
