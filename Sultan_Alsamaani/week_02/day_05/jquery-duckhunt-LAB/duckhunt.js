$(document).ready(function () {
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // first lets grab the <body></body>
  var $body = $('body');
  // 1. Can you create a <div> with the class "duck" and name it "duck"
function orginalCode()
{
  var $duck = $('<div/>');
  $duck.addClass("duck");
  $body.append($duck);
  setInterval(function () {
    $duck.toggleClass('flap');
  }, 250)
  console.log("step two done");
$duck.css("top", "150px")
  $duck.css("left", "500px")
  console.log("step three done");

setTimeout(function () {
    $duck.css('top', Math.random() * (window.innerHeight - 50) + 'px');
    $duck.css('left', Math.random() * (window.innerWidth - 50) + 'px');
  }, 1000)
  console.log("step four done");

}
  

  // console.log("step one done");
  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  

  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
  

  // 4. Try making the duck move to a different location after 1 second
  //setTimeout(function(){

  // })
  // setInterval(function(){

  //   $duck.animate({"top":Math.random()*window.innerHeight+'px',"left":Math.random()*window.innerWidth+'px'},500)

  // },1000);
  

  // 5. Congratulations!
  // 6. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  function createDuck() {
    var $duck = $('<div/>');
    $duck.addClass("duck");
    $body.append($duck);

    setInterval(function () {
      $duck.toggleClass('flap');
    }, 250)

    $duck.css("top", Math.random() * (window.innerHeight - 50) + 'px')
    $duck.css("left", Math.random() * (window.innerWidth - 50) + 'px')

    setInterval(function () {
      $duck.animate({ "top": Math.random() * window.innerHeight + 'px', "left": Math.random() * window.innerWidth + 'px' }, 500)
    }, 1000);
    // setTimeout(function () {
    //   $duck.css('top', Math.random() * (window.innerHeight - 50) + 'px');
    //   $duck.css('left', Math.random() * (window.innerWidth - 50) + 'px');
    // }, 1000)
    $duck.on('click',function(){
      $duck.addClass('shot');
      setTimeout(function(){
        $duck.remove();
        checForWinner();
      },100)
    })
    return $duck;
  }
  //    and "returns" the duck object

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function
  for (var i = 0; i < 5; i++) {
    createDuck()
  }

  // 8a. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //    it creates a duck, it appears in a random location
  // 8b. The ducks should also move to a random location after 1 second
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  // 9. Our ducks are going to be easy targets if they only move once.
  //    Modify createDuck() so the ducks keep moving around

})
