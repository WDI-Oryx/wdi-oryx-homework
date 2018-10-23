console.log('starter2.js linked');

$(function(){
    var zones = ['zone-3', 'zone-2', 'zone-1', 'zone-4']
function game(id,zone){  

    if (id==zone)
    return true;
}

function setBgColor(myThis,color){
    $(myThis).css("background-color",color)  
}


//code goes here


var i=0;
var nextZone = zones[i];
  var current;
$('.zone').on('click',function(){
    current=$(this);
    if (game(this.id,nextZone)){
        $(this).addClass("green");
        i++;
        nextZone = zones[i];
        console.log(i,nextZone,zones[i]);
        $(this).off('mouseleave');
        $(this).off('mouseover');
        if($('.zone.green').length === 4)
        {
            console.log("Congrats!!");
        }
    }
    else{
        current.toggleClass("red");
        setTimeout(function() {
            current.removeClass("red");
           
            console.log($(this),"j");   
          }, 1500);
          
    }


})
$('.zone').on('mouseover',function(event){
    
    
  
       
    if ((game(this.id,nextZone))){
        $(this).addClass("green");
        
    }
    else{
        $(this).addClass("red");
       
    }
    
    })
  

$('.zone').on('mouseleave',function(event){
  
    $(this).removeClass("red");
    $(this).removeClass("green");

})



})