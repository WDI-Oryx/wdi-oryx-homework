const baseURL = "http://api.open-notify.org/iss-now.json";

const method = "GET";

const dataType = "application/json";

const httpOptions = {
    method: method
};

function turnResponseIntoObject(response) {
    return response.json();
}

function displayData(data) {
    var div = document.querySelector(".container")
    div.innerHTML = "<h1>" + data["iss_position"]["latitude"] + " " + data["iss_position"]["latitude"] + " </h>"
}

   
    fetch(baseURL , httpOptions)
        .then(turnResponseIntoObject)
        .then(displayData);

