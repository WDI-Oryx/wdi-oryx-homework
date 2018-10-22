console.log('starter1.js linked');


//code goes here
$(function(){
var count = 0;
var arr =[];
    $(".zone").on("mouseenter",function (event) 
    { 
        $(this).addClass("green");
    });
     $(".zone").on("mouseleave", function(event)
     {
        $(this).removeClass("green");
     });

    $(".zone").on("click", function(event){
        arr.push($(this).attr("value"));
        count++;
        $(this).css("background-color","green");
        if (count === 4)
    {
        console.log("congratulations");
    } 
    });

    

    
});
