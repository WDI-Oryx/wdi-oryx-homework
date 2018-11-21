const url = "/messages/";
function responseToJSON(response) {
    return response.json();
}

function displayAllMessages(data) {
    const listItems = data.map(function (message) {
        return `
        <li id="message-${message.id}">
        ${message.content}</li>
        `;

    }).join("");
    const allMessagesDiv = document.querySelector("#all-messages");
    allMessagesDiv.innerHTML = `<ul>${listItems}</ul>`;
}
function getAllMessages() {

    fetch(url).then(responseToJSON).then(displayAllMessages);
}

setInterval(getAllMessages, 2000);

function getMessage(id) {
    fetch(url + id).then(responseToJSON).then(function (data) {
        //debugger;
        const showMessageDiv = document.querySelector("#show-message");
        showMessageDiv.innerHTML = `
        <h2>Message id: ${data.id}</h2>
        <p>Content: ${data.content}</p>
        <p>Accepted: ${data.accepted}</p>
        <p>Created at: ${data.created_at}</p>
        `;
    });
}

function addNewMessage(content) {
    const httpOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            content: content,
        })
    };

    fetch(url, httpOptions)
        .then(responseToJSON)
        .then(data => {
            const html = `
           <li id="message-${message.id}">
        ${message.content}</li>`;

            const ul = document.querySelector("ul");
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
        addNewMessage(content);

    });

    const allMessagesDiv = document.querySelector("#all-messages");
    allMessagesDiv.addEventListener("click", function (e) {
        const clickedLi = e.target;
        const id = clickedLi.id.replace("message-", "");
        getMessage(id);
    });
};