console.log('starter1.js linked');

// turn all the boxes to green when the mouse hovers on them. 
// 1. call the tags of the boxes using DOM. 
// 2. if someone hovers the mouse on the box, change the color to green. do this by addin an event listner. 
// 3. if someone clicks on the box, lock the color of the box to green. do this by addin an event listner. 
// 4. use if statement to print out a "Congratulation" statement when someone checks all the boxes to green.  



var eventType = "mouseover";
var body = document.querySelector(".zone");

function changeColor () {
    var styles = getComputedStyle(body);
    console.log(styles.backgroundColor);
    body.style.backgroundColor = "green";
}

body.addEventListener(mouseover, changeColor);

////////////////////////////////////////////////////
////////////Another way of solving it //////////////

var body = document.getElementById(".zone");
  
  body.addEventListener("mouseenter", function(event) {   
    event.target.style.color = "green";

    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

  test.addEventListener("mouseover", function(event) {   
    event.target.style.color = "white";

    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);