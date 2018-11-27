// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function responseToJSON(response) {
    return response.json();
}

function displayAllMessages(data) {
    const listItems = data.map(function (message) {
        return `
        <li id="message-${message.id}">
        ${message.content}
        </li>`;
    }).join("");
    
    const allMessagesDiv = document.querySelector("#all-messages");
    allMessagesDiv.innerHTML = `<ul>${listItems}</ul>`

    console.log(listItems);
}

function getAllMessages() {
    fetch("/messages")
        .then(responseToJSON)
        .then(displayAllMessages);
}

getAllMessages();
setInterval(getAllMessages, 2000); // Polling


function getMessage(id) {
    fetch(`/messages/${id}`)
        .then(responseToJSON)
        .then(function (data) {
            const showMessageDiv = document.querySelector("#show-message");
            const html = `
            <h2>Message ${id}</h2>
            <p>${data.content}</p>
            <p>Created at: ${data.created_at}</p>
            `;

            showMessageDiv.innerHTML = html;
        });
}

function addNewMessage(content) {
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
    })
        .then(responseToJSON)
        .then(data => {
            const html = `<li id="message-${data.id}>${data.content}</li>`;
            const ul = document.querySelector("ul");
            ul.innerHTML += html;
        });
}

window.onload = function () {
    getAllMessages();

    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const textarea = document.querySelector("#new-message");
        const content = textarea.value;
        addNewMessage(content);
        console.log(content);
        console.log("The form was submitted");
    });

    const allMessagesDiv = document.querySelector("#all-messages");
    allMessagesDiv.addEventListener("click", function (e) {
        const clickedLi = e.target;
        const id = clickedLi.id.replace("message-", "");
        console.log(id);
        console.log(clickedLi);
        getMessage(id);
    });
};