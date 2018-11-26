function displayMessages(data) {
  //   debugger;
  const items = data.map(message => `<li>${message.content}</li>`).join("");
  const allMessagesDiv = document.querySelector("#messages");
  allMessagesDiv.innerHTML = `<ul>${items}</ul>`;
}

function displayNewMessage(data) {
  const messagesDiv = document.querySelector("ul");
  const html = `<li>${data.content}</li>`;
  messagesDiv.innerHTML += html;
}

function getAllMessages() {
  fetch("/messages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(r => r.json())
    .then(displayMessages);
}

getAllMessages();

function addMessages(content) {
  //   console.log("this run");
  const newM = { content: content };
  fetch("/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(newM)
  })
    .then(r => r.json())
    .then(displayNewMessage);
}

window.onload = function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(prev) {
    prev.preventDefault();
    const content = document.querySelector("#new-message").value;
    addMessages(content);
  });
};
