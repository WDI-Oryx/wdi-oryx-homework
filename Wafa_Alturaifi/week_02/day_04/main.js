
//creat array 


var arrayOfBoxes=["box1","box2","box3","box4"];

var $containerDiv = $(".container");

for(var i=0;i<arrayOfBoxes.length;i++){
    var $divboxes = $("<div>").addClass("box").addClass("box" + i);
    $containerDiv.append($divboxes);
}

//giv the boxes border and size


$(".box").css("border", "2px solid black");
$(".box").css("height" ,"100px");
$(".box").css("width" ,"100px");
// $(".container").append(".box");


//havor color grean or red



$(".box").hover(function(){
    $(this).css("background-color", "green");
}, function(){
$(this).css("background-color", "white");
        
});

$(".box0").hover(function(){
    $(this).css("background-color", "red");
    }, function(){
    $(this).css("background-color", "white");
});


// click box2 color green
function onBoxClick(){
    $(this).css("background-color", "green");
    $(this).addClass("clicked");
    $(this).off();
}

$(".box2").click(onBoxClick);