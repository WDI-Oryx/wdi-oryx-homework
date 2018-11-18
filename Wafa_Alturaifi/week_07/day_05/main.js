// const apiURL =
//   "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8e6d8f4468e511c64b90c0ff56c34942";
// const method = "GET";
// const dataType = "JSON";

// fetch(apiURL)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });
$.getJSON(
  "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8e6d8f4468e511c64b90c0ff56c34942",
  function(data) {
    console.log(data);
    var icon =
      "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = data.main.temp;
    var weather = data.weather[0].main;
    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temp").append(temp);
  }
);
