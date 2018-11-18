const apiURL = "http://api.open-notify.org/astros.json";
const method = "GET";
const dataType = "JSON";


fetch(apiURL, {method: method,dataType: dataType}).then(function(){
    console.log("THIS WORKED");
});

fetch(apiURL).then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
});