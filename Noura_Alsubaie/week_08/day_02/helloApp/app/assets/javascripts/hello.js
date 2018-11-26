
function responseToJSON(response) {
    return response.json();
}





function displayAllmsgs(data) {
    const listItems =
        data.map(function (msg) {
            return `<li id=msg-${msg.id}> ${msg.content}</li>`;
        }).join("");

    const allMsgsDiv = document.querySelector("#all-msgs");
    allMsgsDiv.innerHTML = `<ul>${listItems}</ul>`;
    // debugger;
}



function getAllmsgs() {
    fetch("/msgs", {
        header: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })

    .then(responseToJSON)
    .then(displayAllmsgs);
}



function getMsg(id){
    
    fetch(`/msgs/${id}`,{
            method: "GET", headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }

    })
    .then(responseToJSON)
    .then(function (data){
        const showMsgDiv = document.querySelector("#show-msg")
        const html = ` 
                        <h4> ${data.id} </h4> 
                        <p> ${data.content} </p>
                        <li> ${data.completed} </li>
                        <li> ${data.created_at} </li>
        `; // {data.id} it suppose to be data.name but its too late to fix it ;)
    
        showMsgDiv.innerHTML =html;
    })

}


function addNewMsg(content){
    
    const params = {conten: content};
    fetch("/msgs",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",

        },
        body: JSON.stringify(params)

    })
        .then(responseToJSON)
        .then(data => {
            const ul = document.querySelector("ul");
            const html = `<li id="msg-${data.id}">${data.content}</li>`;
            ul.innerHTML += html;

        });


}





window.onload = function () {
    getAllmsgs();


    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) { // this line has an error |Cannot read property 'addEventListener' of null|
        e.preventDefault();
        const input = document.querySelector("#new-msg")
        const content = input.value;
        addNewMsg(content);

    });

    const allMsgssDiv = document.querySelector("#all-msgs");
    allMsgssDiv.addEventListener("click", function (e) {
        const clickedLi = e.target;
        const id = clickedLi.id.replace("msg-", "");
        console.log(clickedLi);
        getMsg(id)
    });


}