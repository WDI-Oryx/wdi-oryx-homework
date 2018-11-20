function responseToJSON(response) {
  return response.json();
}

function displayAllMessages(data) {
  //console.log("S", data);
  const listItems = data
    .map(function(msg) {
      return `
      <li id='message-${msg.id}' >
      ${msg.content}
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
///////////
window.onload = function() {
  getAllMessages();
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const input = document.querySelector("#new-message");
    const content = input.value;
    addNewMessage(content);
  });
};

function displayMessage(data) {
  const html = `
        <li id="message-${data.id}">
          ${data.content}
        </li>
        `;
  const ul = document.querySelector("ul");
  ul.innerHTML += html;
}

function addNewMessage(content) {
  const params = {
    content: content
  };
  fetch("/messages", {
    method: "POST",
    headers: {
      // Content-Type is what format the data you are providing is in (JSON)
      "Content-Type": "application/json",
      // Accept is what format the data you are receiving is in (JSON)
      Accept: "application/json"
    },
    body: JSON.stringify(params)
  })
    .then(responseToJSON)
    .then(displayMessage);
}
