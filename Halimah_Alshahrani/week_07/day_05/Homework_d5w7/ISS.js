
const apiURL = "http://api.open-notify.org/iss-now.json";

const method = "GET"; 


const dataType = "JSON";

const refresh = document.getElementsByTagName('html')[0];
let time = new Date().getTime();

function goLoad() {
    if (new Date().getTime() - time >= 1000) {
        time = new Date().getTime();
        window.location.reload(true);
    } else {
        time = new Date().getTime();
    }
}
refresh.onmousemove = goLoad;

fetch(apiURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        const location = data.iss_position;

        document.body.innerHTML += `<h1>ISS Current location is :</h1>`
        document.body.innerHTML += `<h3>Latitude: ${location.latitude}</h3>`;
        document.body.innerHTML += `<h3>Longitude: ${location.longitude}</h3>`;
    });
