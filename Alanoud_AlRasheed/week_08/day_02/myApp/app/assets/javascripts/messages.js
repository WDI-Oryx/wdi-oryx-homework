// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
const baseUrl = '/messages.json';

function jsonRespond(response) {
    return response.json();
}

function displayData(data) {
    const messageBox = document.querySelector('#messages-box');
    messageBox.innerHTML = '';
    for (let message of data) {
        const html = `<p>- ${message.content}</p>`;
        messageBox.innerHTML += html;
    }

}

function addNewMessage(content) {
    const params = { content }
    fetch(baseUrl, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(params) }).then(jsonRespond).then(data => {
        const messageBox = document.querySelector('#messages-box');
        const html = `<p>- ${data.content}</p>`;
        messageBox.innerHTML += html;
    });
}

function getAllMessages() {
    fetch(baseUrl).then(jsonRespond).then(displayData);
}

window.onload = function () {
    setInterval(getAllMessages, 3000);
    const form = document.querySelector('form');
    form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        const content = document.querySelector('#new-message').value;
        addNewMessage(content);

    })

};
