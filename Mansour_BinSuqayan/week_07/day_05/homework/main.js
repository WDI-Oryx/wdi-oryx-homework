const type ="JSON";  
const method = "GET";
const url = "http://api.open-notify.org/iss-now";

fetch(url,{method:method,dataType:type})
.then(function(response){
    return response.json();
}).then(function (data){
    const html = `
    <h2>The latitude: ${data.iss_position.latitude}</h2>
    <h2>The longitude: ${data.iss_position.longitude}</h2>
    `;
    document.querySelector("#box").innerHTML = html;
});