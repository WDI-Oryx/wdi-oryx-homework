// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
console.log("h");
function responseToJson(response) {
    return response.json();
  }

  function displayAllMessages(data) {
    const ListMessages = data
      .map(function(message) {
        return `<li id=message-${message.id}> ${message.name}: ${message.message}</li>`;
      })
      .join("");
    console.log(ListMessages);
    const allMessageDiv = document.querySelector("#all-messages");
    allMessageDiv.innerHTML = `<ul>${ListMessages}</ul>`;
  }

  function getAllMessages() {
    fetch("/messages")
      .then(responseToJson)
      .then(displayAllMessages);
  }

  function getMessage(id) {
    fetch(`/messages/${id}`)
      .then(responseToJson)
      .then(function(data) {
        const showMessageDiv = document.querySelector("#show-message");
        showMessageDiv.innerHTML = `<h1>Message ${id}</h1>
         <h1>${data.message}</h1>`;
      });
  }
  
  function addNewMessage(name,message) {
    let params = { message: message, name: name };
    fetch("/messages", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(params)
    })
      .then(responseToJson)
      .then(data => {
        const ul = document.querySelector("ul");
        const html = `<li id=message-${data.id}>${data.name}: ${data.message}</li>`;
        ul.innerHTML += html;
      });
  }

  window.onload = function() {
    getAllMessages();
    const form = document.querySelector("form");
    const name = document.querySelector("#new-name");
    const input = document.querySelector("#new-message");
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      addNewMessage(name.value,input.value);
    });

    const allMessagesDiv = document.querySelector("#all-messages");
    allMessagesDiv.addEventListener("click", function(e) {
      const id =  e.target.id.replace("message-", "");
      getMessage(id);
    });
  };
  