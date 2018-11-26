function responseToJSON(response) {
    return response.json();
}

function displayAllMessages(data){
    const listMsg = data.map(function (message) {
        return `
        <li id="message-${message.id}">
        ${message.content}
        </li>`;
    })

    .join("");
    const allMsgDiv = document.querySelector("#all-messages");
    allMsgDiv.innerHTML = `<ul>${listMsg} </ul>`
    console.log(listMsg);
}

function getAllMsg() {
    fetch("/messages").then(responseToJSON).then(displayAllMessages);
}

function getMsg(id){
    fetch(`/messages/${id}`).then(responseToJSON).then(
        function(data){
            const showMsgDiv = document.querySelector("#show-message");
            const html = `
            <h2>Message ${data.id}
            <p>${data.content}</p>
            `;
            showMsgDiv.innerHTML = html;
        });
}

function addNewMsg(content) {
    const params = {content : content};
    fetch("/messages",{method: "POST", headers:{"Content-Type": "application/json",
Accept: "application/json",
},
body: JSON.stringify(params)
})
.then(responseToJSON).then(data => {
            const html = `<li id="message-${data.id}">${data.content}</li>`;
            const ul = document.querySelector("ul");
            ul.innerHTML += html;
        });
    }

window.onload = function () {
    getAllMsg();

    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = document.querySelector("#new-message");
        const content = input.value;


        addNewMsg(content);


        // console.log("Thr form was submitted");
    })


    const allMsgDiv = document.querySelector('#all-messages');
    allMsgDiv.addEventListener('click', function (e) {
        const clickedLi = e.target;
        const id = clickedLi.id.replace("message-", "");
        getMsg(id);
    });
};