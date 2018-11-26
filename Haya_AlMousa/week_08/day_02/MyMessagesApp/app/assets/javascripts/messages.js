function responseToJSON(response) {
    return response.json();
}
function displayAllMessages(data) {
    const listItems = data
        .map(function (message) {
            return `
        <li>
          ${message.content}
        </li>
      `;
        })
        .join("");
    const allMessagesDiv = document.querySelector("#all-messages");
    allMessagesDiv.innerHTML = `<ul>${listItems}</ul>`;
}

function getAllMessages() {
    fetch("/messages")
        .then(responseToJSON)
        .then(displayAllMessages);
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
            const html = `
        <li id="message-${data.id}">
          ${data.content}
        </li>
      `;
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