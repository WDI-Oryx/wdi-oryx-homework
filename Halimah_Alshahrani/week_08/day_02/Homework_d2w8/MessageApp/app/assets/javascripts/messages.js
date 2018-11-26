// URL
// /messages
// Method
// GET
// Data type
// Json 

function responseToJSON(response) {
    return response.json();
}

function displayAllMessages(data){
const allMessages = data
.map(function (message) {
        return `
      <li>
        ${message.content}
      </li>
    `;
    })
        .join("");
        
        // console.log(allMessages);
    const messagesDiv = document.querySelector("#all-messages");
    messagesDiv.innerHTML = `<ul>${allMessages}</ul>`;

}

function getAllMessages(){
fetch("/messages")
    .then(responseToJSON)
    .then(displayAllMessages);
}


function newMessage(content) {
    
    const params = {
        content: content
    };
    fetch("/messages", {
        method: "POST",
        headers: {
        
            "Content-Type": "application/json",
           
            Accept: "application/json"
        },
        body: JSON.stringify(params)
    }).then(responseToJSON)
        .then(message => {
            const ul = document.querySelector("ul");
            const html = `<li>${message.content}</li>`;
            ul.innerHTML += html;
        });
}
window.onload = function () {
    getAllMessages();

    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = document.querySelector("#new-message");
        const content = input.value;
        newMessage(content);
    });
};

