console.log('starter1.js linked');

$(function () {
    var boxCounter = [];
    //1. When the mouse enters any of the zones change its background color to `green`
    $(".zone").on("mouseenter", function (event) {
        $(this).addClass("green");
    });

//2. When the mouse leaves a zone change its background color back
    $(".zone").on("mouseleave", function(event){
        $(this).removeClass("green");
    });
    
//3. When you click on a zone it locks its color to green.
//4. When all zones are checked green, log a statement of congratulations to the console!

    $(".zone").click(function(event){
        if(!boxCounter.includes(this.id))
        boxCounter.push(this.id);
        $(this).css("background-color","green");
        if(boxCounter.length === 4)
          console.log("Congratulations");
    });

    });