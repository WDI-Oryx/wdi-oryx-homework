$(document).ready(function(){
    console.log("JQ connected");
    var $body = $("body");
    var $newBox = $("<div/>").addClass("box").text("HEllO, My name Mreuoo");
    $body.append($newBox);
    $(".container").append($newBox);
    console.log($newBox);


})

