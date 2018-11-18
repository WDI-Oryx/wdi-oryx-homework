const apiURL = "http://api.open-notify.org/iss-now";
const method = "GET";
const dataType = "JSON";

fetch(apiURL, { method: method, dataType: dataType })
.then(function(responce){
    return responce.json();
})
.then(function(data){
 const lat=data.iss_position.latitude;
 const lon = data.iss_position.longitude;
     document.body.innerHTML=`<h1> ${lat} ${lon}</h1>`;
});