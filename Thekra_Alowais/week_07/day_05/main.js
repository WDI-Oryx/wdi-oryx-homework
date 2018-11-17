const URL = "http://api.open-notify.org/iss-now.json";

function jsonResponse(jsonResponse) {
  //   return promise
  //   Transform the data into json
  return jsonResponse.json();
}
function displayData(data) {
  //   json response
  // console.log(data);
  let result = data.iss_position;
  let latResult = result.latitude;
  let longResult = result.longitude;
  //   document.body.innerHTML = `${lat} ${long}`;
  console.log(`${latResult} ${longResult}`);
  let myLatlng = new google.maps.LatLng(latResult, longResult);
  let map = new google.maps.Map(document.getElementById("map"), {
    center: myLatlng,
    zoom: 8
  });
  // Add marker
  let marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "current location"
  });
  //   console.log(myLatlng);
  //   var lat = marker.getPosition().lat();
  //   var lng = marker.getPosition().lng();
  //   console.log(lat, lng);
  //   var flightPlanCoordinates = [{ lat, lng: lng }];
  //   var flightPath = new google.maps.Polyline({
  //     path: flightPlanCoordinates,
  //     geodesic: true,
  //     strokeColor: "#FF0000",
  //     strokeOpacity: 1.0,
  //     strokeWeight: 2
  //   });

  //   flightPath.setMap(map);
}
function FetchData() {
  fetch(URL)
    .then(jsonResponse)
    .then(displayData);
}
setInterval(FetchData, 5000);
