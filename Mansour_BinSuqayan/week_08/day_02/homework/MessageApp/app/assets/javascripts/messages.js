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
    divMessages.innerHTML = html;
}

// fetch(url,{httpOptions})
function fetchData(){
    fetch(url,httpOptions)
    .then(turnResponseIntoObject)
    .then(displayData);
}


function addMessgae(meg){
    const html = `<li>${meg}</li>`;
    const divMessages = document.querySelector("#all-messagesss");
    divMessages.innerHTML += html;
}

window.onload = function(){
    fetchData();
    setInterval(fetchData,1000);
    const form = document.querySelector("form");
    const input = document.querySelector("#input");
    form.addEventListener('submit',function(ev){
        ev.preventDefault();
        addMessgae(input.value);
    });
    
}