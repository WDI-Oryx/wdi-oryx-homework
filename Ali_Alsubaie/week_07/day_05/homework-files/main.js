const apiURL = "http://api.open-notify.org/iss-now",
	method = "GET",
	dataType = "JSON",
	// Intervals in ms
	repeatTime = 1000;
var map, marker;

function displayData(data) {
	const pos = data.iss_position;

	document.querySelector(".longitude").innerHTML = pos.longitude;
	document.querySelector(".latitude").innerHTML = pos.latitude;
	document.querySelector(".time").innerHTML = new Date(data.timestamp * 1000);
	var currentPos = {
		lat: parseFloat(pos.latitude),
		lng: parseFloat(pos.longitude)
	};
	map.setCenter(currentPos);
	marker.setPosition(currentPos);
}

function callAPI() {
	fetch(apiURL, { method: method, dataType: dataType })
		.then(response => response.json())
		.then(displayData);
}

callAPI();

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		zoom: 6,
		center: { lat: -34.397, lng: 150.644 }
	});
	marker = new google.maps.Marker({
		position: { lat: -34.397, lng: 150.644 },
		icon: "sat1.png",
		map: map
	});
	setInterval(callAPI, repeatTime);
}
