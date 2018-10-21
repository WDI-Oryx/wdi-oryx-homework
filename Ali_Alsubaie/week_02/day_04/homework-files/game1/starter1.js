console.log("starter1.js linked");

//code goes here
var zonesClicked = []; // Array for clicked zones
var $zones = $(".zone"); // Get all zones (boxes)
// Loop through zones and add hover and click event listener
for (let i = 0; i < $zones.length; i++) {
	$($zones[i]).on("mouseenter", onHover);
	$($zones[i]).on("mouseleave", onHover);
	$($zones[i]).click(onClick);
}
// On hover function
function onHover(e) {
	// Toggle the class green on the selected element for green background
	$(this).toggleClass("green");
}
// On click function
function onClick(e) {
	// Remove hover event listeners
	$(this).off("mouseenter");
	$(this).off("mouseleave");

	// Check if the clicked zone is in the clicked zones array
	if (!zonesClicked.includes(this.id))
		zonesClicked.push(this.id); // Push if it isn't
	// If the clicked zones array length is four, finish the game
	if (zonesClicked.length === 4) {
		console.log("Congratulations");
		setTimeout(() => {
			$(".zone").css("background-color", "yellow");
		}, 1000);
		setTimeout(() => {
			$(".zone").css("background-color", "red");
		}, 2000);
		setTimeout(() => {
			$(".zone").css("background", "none");
		}, 3000);
	}
}
