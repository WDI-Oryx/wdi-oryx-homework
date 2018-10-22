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
var zones = ['zone-1', 'zone-2', 'zone-3', 'zone-4']
$('.zone').on('click',function(event){
    $(this).off('mouseleave')
    if (game(this.id)){
        setBgColor(this,"green")
    }


})

$('.zone').on('mouseover',function(event){
    for (var i =0;i<zones.length;i++){

    if (!(game(this.id,zones[i]))){
        setBgColor(this,"red")
    }
    else{
        setBgColor(this,"green")
    }
    }
    return
})

$('.zone').on('mouseleave',function(event){
  
    setBgColor(this,"white")
  

})



})