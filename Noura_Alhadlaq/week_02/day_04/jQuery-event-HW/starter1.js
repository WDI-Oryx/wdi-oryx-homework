
$(function(){
//code goes here
var $clickedZones = 1;
// when the mouse enters the zone change color to green.
$(".zone").on("mouseenter",function(event){
    $(this).addClass("green");
    $(this).css("backgroundColor","green"); 
     
});

// when the mouse enters the zone return color to white.
$(".zone").on("mouseleave",function(event){
         $(this).css("backgroundColor","white"); 
    });

/// when the zone is clicked change color to green .
$(".zone").on("click",function(event){
    
    if($clickedZones === 4){
        //console.log("congratulations!!!!");
        alert("Congratulations");
    }else {
    $clickedZones++ ;
    $(".zone").off("mouseleave");
    $(this).css('backgroundColor', 'green') 
    }  
})


})