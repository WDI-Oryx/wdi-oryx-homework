// GET, "/messages",  asking for JSON with no Body/params

//URL
const url = "/messages";
//METHOD
const method = "GET";
//Datatype
const dataType = "json";
const httpOptions = {
    method: method,
    dataType:dataType
};


function turnResponseIntoObject(response){
   return response.json();
}

function displayData(data){
    const divMessages = document.querySelector("#all-messages");
    let html = "";
    for(let i of data){
        html += `<li>${i.content}</li>`;
    }
    console.log(html);
    divMessages.innerHTML = html;
}

// fetch(url,{httpOptions})
fetch(url,httpOptions)
.then(turnResponseIntoObject)
.then(displayData);