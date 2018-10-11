$(document).ready(function() {
  var body = $('body');

function cratduck() {
  
    var $duck = $('<div>').addClass('duck');
  $('body').append($duck)
  setInterval(function(){ 
    $duck.toggleClass('flap');
    }, 250);
    $duck.css('top',Math.random()*window.innerHeight);
    $duck.css('left',Math.random()*window.innerWidth);
    $duck.css('right',Math.random()*window.innerHeight);
    $duck.css('bottom',Math.random()*window.innerWidth);
    setInterval(function () {
    $duck.css('top',Math.random()*window.innerHeight);
    $duck.css('left',Math.random()*window.innerWidth);
    $duck.css('right',Math.random()*window.innerHeight);
    $duck.css('bottom',Math.random()*window.innerWidth);
    
},1000)
return $duck ;

}


  
  for(var i=0;i<6;i++){
  cratduck();
}
 


}); 