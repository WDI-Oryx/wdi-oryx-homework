// Anythime I work with an API, I nee to answer the following questions

//URL?
const baseURL = "https://randomuser.me/api/";

//Method 
const method = "GET";

//Data Type 
const dataType = "application/json";


const httpOptions = {
    method: method
};


function turnResponseIntoObject(response){
        return response.json();
}

function displayData(data){
    
    const outputDiv = document.querySelector("#output");
    outputDiv.innerHTML = ""
    for(let person of data.results){
        const html = `
        <h2>${person.name.first} ${person.name.last}</h2>
        <img src="${person.picture.medium}">
        <p>Email:${person.email}</p>
        `;
       
        outputDiv.innerHTML += html;
    }
   
   
}



function fetchNewUser(){
    var num = document.querySelector("#user-count");
    var gender = document.querySelector("#gender");
console.log(gender.value);
//Fetch request
fetch( baseURL + `?results=${num.value}&gender=${gender.value}`, httpOptions)
.then(turnResponseIntoObject)
.then(displayData);
}

const button = document.querySelector("button");
button.addEventListener("click",fetchNewUser);