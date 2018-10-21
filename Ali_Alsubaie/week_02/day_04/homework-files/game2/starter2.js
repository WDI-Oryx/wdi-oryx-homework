console.log("starter2.js linked");

//code goes here
// Array of all zones
const zoneArray = ["zone-1", "zone-2", "zone-3", "zone-4"];
var clickedZones = []; // Array for clicked zones
// Shuffled zones array
var shuffledZones = [];
// Get zones elements
const zones = $(".zone");
var countGames = 0;

// Initialize the game
function init() {
  if(countGames > 0)
    $("h1").text("Try again!");
  else
    $("h1").text("Let's Play!");
  shuffledZones = [];
  // Shuffle
  while(shuffledZones.length !== zoneArray.length){
    var rand = Math.floor( Math.random() * zoneArray.length);
    if(!shuffledZones.includes(zoneArray[rand]))
      shuffledZones.push(zoneArray[rand]);
  }
	// Loop through zones to add hover event
	for (let i = 0; i < 4; i++) {
		$(zones[i]).on("mouseenter", onHover); // On mouse enter
    $(zones[i]).on("mouseleave", onHover); // On mouse leave
	}
}

init();


// Mouse over function
function onHover(e) {
	// Get the index of the hovered element's id in the shuffled array
	var zoneIndex = shuffledZones.indexOf(this.id);
	// Check if the index is equal to the length of clicked zones array
	if (zoneIndex === clickedZones.length) {
		// If this is the next to be clicked, turn green
		$(this).toggleClass("green");
		// Jquery event bugs out for some reason
		// If clicked, run markZone function
		this.addEventListener("click", markZone);
	} else {
		// Else turn red
    $(this).toggleClass("red");
	}
}

// Marking a zone function
function markZone(e) {
	// if a zone is clicked, remove mouse over events
	$(this).off("mouseenter");
	$(this).off("mouseleave");
	// add the element's id to the clicked zones array
	clickedZones.push(this.id);
	// if the length of clicked zones is 4
	if (clickedZones.length === 4) {
    // finish the game and write Grats
    $("h1").text("Great job!");
    countGames++;
		console.log("Congratulations");
		setIntervalX(function() {
				$("#" + clickedZones.pop()).removeClass("green");
			}, 1000, 4);
	}
}

// Customized set interval method for limited repetition
function setIntervalX(callback, delay, repetitions) {
	var x = 0;
	var intervalID = window.setInterval(function() {
		callback();

		if (++x === repetitions) {
			window.clearInterval(intervalID);
			init();
		}
	}, delay);
}