const apiURL = "http://api.open-notify.org/iss-now.json";
const method = "GET";
const dataType = "JSON";

setInterval(function () {

fetch(apiURL, {method: "GET", dataType: "JSON"})

.then(function (geo){
return geo.json();
})

.then(function(data){
const display = data.iss_position;
    document.body.innerHTML = `
            latitude: ${display.latitude},
                longitude: ${display.longitude}
    `;

})

}, 1000);