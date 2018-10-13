console.log('starter1.js linked');

$(function () {
  var zones = ["zone-1", "zone-3", "zone-2", "zone-4"];

    var boxCounter = [];
    $(".zone").on("mouseenter", function (event) {
        $(this).addClass("green");
    });

    $(".zone").on("mouseleave", function(event){
      var indexOfZones = zones.indexOf(this.id);
      if(indexOfZones === boxCounter.length){
        $(this).toggleClass("green");        
      } else { 
        $(this).toggleClass("red");
      }
    });
    
    $(".zone").click(function(event){
      $(this).off("mouseenter");
      $(this).off("mouseleave");
      boxCounter.push(this.id);
        if(boxCounter.length === 4)
          console.log("Congratulations");
    });

    });