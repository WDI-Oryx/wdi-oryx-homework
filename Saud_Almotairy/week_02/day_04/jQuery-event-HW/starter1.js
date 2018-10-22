// Psedue Code 
// Game1
// 3types of events need to be define
// if stament  used to respond when any of them take place
// The above for each zone 
// The backgroundColor for each zone will be changed with clicking
// The backgroundColor will be checked if it is green console will log the congrats
// var events = ["click", "mouseenter", "mouseleave"];
//  avoid going back to white after click
var eventType1 = "click";
var eventType2 = "mouseenter";
var eventType3 = "mouseleave";
var zones = [1, 2, 3, 4];

// for (i = 0; i < zones.length; i++) {
//     var zoneId = "zone-" + zones[i];
//     currentzone = document.querySelector("#zoneId");
//     console.log("clicked");
//     zone1.style.backgroundColor = "green";
//     currentzone.addEventListener(eventType1, clickit);
// }
var divarea = document.querySelectorAll(".zone");
// var zone1 = document.querySelector("#zone-1");
// var zone2 = document.querySelector("#zone-2");
// var zone3 = document.querySelector("#zone-3");
// var zone4 = document.querySelector("#zone-4");

function clickIt(event) {

    console.log("clicked");
    divarea[0].style.backgroundColor = "green";
    divarea[0].style.backgroundColor = "green";

}

function enterIt(event) {

    console.log("mouse entered the zone");
    divarea[0].style.backgroundColor = "green";
}

function leaveIt(event) {

    console.log("mouse left the zone");
    divarea[0].style.backgroundColor = "white";
}


divarea[0].addEventListener(eventType1, clickIt);
divarea[0].addEventListener(eventType2, enterIt);
divarea[0].addEventListener(eventType3, leaveIt);

