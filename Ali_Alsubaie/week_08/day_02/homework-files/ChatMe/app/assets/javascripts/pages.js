window.onload = () => {
	const form = document.querySelector(".form form");
	const messagesDiv = document.querySelector(".messages");

	form.addEventListener("submit", e => {
		e.preventDefault();
		const input = document.querySelector("#chat-input");
		postMessage(input.value);
		input.value = "";
	});

	messagesDiv.addEventListener("click", e => {
		if (e.srcElement.tagName === "BUTTON") {
			const msgId = e.target.id.replace("removeMsgId-", "");
			removeMessage(msgId);
		}
	});

	function getMessages() {
		fetch("/messages")
			.then(r => r.json())
			.then(showMessages);
	}

	function showMessages(messages) {
		const listItems = messages
			.map(
				msg =>
					`<li id="msgId-${msg.id}">
            <button id="removeMsgId-${msg.id}">X</button>
            ${msg.body}
          </li>`
			)
			.join("");
		messagesDiv.innerHTML = `<ul>${listItems}</ul>`;
	}

	function postMessage(msg) {
		const params = { body: msg };
		const httpOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify(params)
		};
		fetch("/messages", httpOptions)
			// .then(r => r.json())
			.then(getMessages);
	}

	function removeMessage(id) {
		// const params = { id: id };
		const httpOptions = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			}
			// body: JSON.stringify(params)
		};
		fetch(`/messages/${id}`, httpOptions)
			// .then(r => r.json())
			.then(getMessages);
	}

	getMessages();
	setInterval(getMessages, 2000);
};
