function responseToJSON(response) {
  return response.json();
}

function displayAllMessages(data) {
  const listItems = data
    .map(function(message) {
      return `
        <li id="message-${
          message.id
        }" class="${message.completed ? "complete" : ""}">
          ${message.content}
        </li>
      `;
    })
    .join("");
  const allMessagesDiv = document.querySelector("#all-messages");
  allMessagesDiv.innerHTML = `<ul>${listItems}</ul>`;
}

function getAllMessages() {
  fetch("/messages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(responseToJSON)
    .then(displayAllMessages);
}

function getTodo(id) {
  fetch(`/messages/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(responseToJSON)
    .then(function(data) {
      const showMessageDiv = document.querySelector("#show-message");
      const html = `
        <h2>Message ${data.id}</h2>
        <p>${data.content}</p>
        <p>Completed: ${data.completed}</p>
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
    .then(message => {
      const html = `
        <li id="message-${message.id}" class="${
        message.completed ? "complete" : ""
      }">
          ${message.content}
        </li>
      `;
      const ul = document.querySelector("ul");
      ul.innerHTML += html;
    });
}

function toggleMessage(id) {
  fetch(`/messages/${id}/toggle`, {
    method: "PUT"
  })
    .then(r => r.json())
    .then(function(data) {
      console.log(data);
    });
}

window.onload = function() {
  getAllMessages();

  const form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const input = document.querySelector("#new-message");
    const content = input.value;
    addNewMessage(content);
  });

  const allMessagesDiv = document.querySelector("#all-messages");
  allMessagesDiv.addEventListener("click", function(e) {
    const clickedLi = e.target;
    clickedLi.classList.toggle("complete");
    const id = clickedLi.id.replace("message-", "");
    getMessage(id);
    toggleMessage(id);
  });

  setInterval(getAllMessages, 3000);
};
