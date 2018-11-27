// const apiURL = "http://api.open-notify.org/astros";
// const method = "GET";
// const dataType = "JSON";

// fetch(apiURL, { method: method, dataType: dataType })
// .then(function(responce){
//      return responce.json();
// })
// .then(function(data){
//   const people=data.people;
//   for(let i=0;i<people.length;i+=1){
//       const person =people[i];
//       document.body.innerHTML +=person.name;
//   }
// });
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
     document.body.innerHTML=lat+"   "+lon;
});