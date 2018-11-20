function initMap() {
	var myLatLng = {
		lat: 28.9329,
		lng: 141.5612
	};

	var map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 5
	});
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'ISS Position!'
	});
	marker.setMap(map);
}
const apiURL = 'http://api.open-notify.org/iss-now';

function turnResponseIntoObject(response) {
	return response.json();
}

function track(data) {
	const time = data['timestamp'];
	const lat = data['iss_position']['latitude'];
	const long = data['iss_position']['longitude'];
	const tracking = `
<h2> ${time} </h2>
<h3> latitude: ${lat} </h3>
<h3> longitude: ${long} </h3>
`;
	document.body.innerHTML += tracking;
}

fetch(apiURL).then(turnResponseIntoObject).then(track);
