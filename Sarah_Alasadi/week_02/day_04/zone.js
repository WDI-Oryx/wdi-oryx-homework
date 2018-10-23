$(document).ready(function(){

    $(".zone").on("mouseenter", function () {
        $(" ").className ="green";
        var targetDiv = document.querySelector(".container");
        targetDiv.appendChild('.zone');
        
    });





//zone1
    $("#zone-1").on("mouseleave", function () {
        $(" " + this.id).removeClass("green");
    });
    //zone2
    $("#zone-2").on("mouseleave", function () {
        $(" " + this).removeClass("green");
    });
    //zone2
    $("#zone-3").on("mouseleave", function () {
        $(" " + this).removeClass("green");
    });

    //zone4
    $("#zone-4").on("mouseleave", function () {
        $(" " + this).removeClass("green");
    });

  

 $(".zone").on("click", function () {

$(" " + this).of("mouseenter");

 
  $(" " + this).of("click");

/*for(i = 0;i<=zone.length;i++){
    console.log("Congratulations"); 
} */


 if ($B <= 4) {

 console.log('Congrat');
        }
    })
}); 





