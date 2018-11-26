function responseToJson(response) {
	return response.json();
}

function displayMessages(data) {
	const allMessages = data
		.map(function(message) {
			return `<li id="message-${message.id}">${message.content}</li>`;
		})
		.join('');
	const messagesDiv = document.querySelector('#all-messages');
	messagesDiv.innerHTML = `<ul>${allMessages}</ul>`;
}

function getMessages() {
	fetch('/messages').then(responseToJson).then(displayMessages);
}

function addNewMessage(message) {
	const params = { content: message };
	const httpOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(params)
	};
	fetch('/messages', httpOptions).then(responseToJson).then((data) => {
		const ul = document.querySelector('ul');
		const html = `<li id="message-${data.id}">${data.content}</li>`;
		ul.innerHTML += html;
	});
}

// setInterval(getMessages, 2000); //polling

window.onload = function() {
	getMessages();
	const form = document.querySelector('form');
	form.addEventListener('submit', function(e) {
		e.preventDefault();
		const input = document.querySelector('#new-message');
		const content = input.value;
		addNewMessage(content);
	});
};
