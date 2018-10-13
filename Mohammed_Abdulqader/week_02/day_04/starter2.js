
 $(function(){
   var mm = ['zone-1', 'zone-2', 'zone-3', 'zone-4'];
   for (var i = 0; i< mm.length-1 ; i++) {
       var element = mm[i].length;
       
   }
   
var chose = element;
           
if (chose === element){
    $(".zone").on("mouseenter", function(event){
    $(this).css("background-color", "green")
    })
    $("#zone-4").on("mouseenter", function(event){
        $(this).css("background-color", "red") 
    })
    } else{
        console.log("heloo");
        

        }




})