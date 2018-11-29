function responseToJson(response) {
  //   console.log(response);
  return response.json();
}
function displayAllMessages(messages) {
  console.log(messages);
  const list = messages
    .map(function(message) {
      return `<p id="message-${message.id}">
${message.content}
</p>`;
    })
    .join("");
  const allMessagesDiv = document.querySelector("#all-messages");
  allMessagesDiv.innerHTML = `<ul>${list}</ul>`;
}
function displayMessage(message) {
  const html = `<p id="message-${message.id}">
${message.content}
</p>`;
  const ul = document.querySelector("ul");
  ul.innerHTML += html;
}
function getAllMessages() {
  fetch("/messages")
    .then(responseToJson)
    .then(displayAllMessages);
}
function addNewMessage(message) {
  const params = {
    content: message
  };
  const httpOptions = {
    method: "POST",
    headers: {
      //The "Content-Type" part will tell your Rails app that it will be
      //    receiving JSON, and the "Accept" part will tell your Rails app to send back JSON
      "Content-type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(params)
  };
  fetch("/messages", httpOptions)
    .then(responseToJson)
    .then(displayMessage);
}
getAllMessages();

window.onload = function() {
  const form = document.querySelector("form");
  const input = document.querySelector("#new-message");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const message = input.value;
    addNewMessage(message);
  });
};
