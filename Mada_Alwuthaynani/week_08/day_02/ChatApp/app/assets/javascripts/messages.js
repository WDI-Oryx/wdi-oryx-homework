// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function responseToJson(response){
    return response.json();
    }
    function displayAllMessages(data){
   const ListItems= data.map(function(message){
       return `<li>${message.content}</li>`;
   })
   .join("")
   console.log(ListItems);
    const allMessagesDiv=document.querySelector("#all-messages");
    allMessagesDiv.innerHTML=`<ul>${ListItems}</ul>`;   }
function getAllMessages(){
fetch("/messages")
.then(responseToJson)
.then(displayAllMessages);
setTimeout(getAllMessages,3000);
}
getAllMessages();
function addNewMessage(content) {
    let params={content: content};
    fetch("/messages", {
        method: "POST",
        headers:{
"content-Type":"application/json",
Accept: "application/json"
        },
        body: JSON.stringify(params)
    }).then(responseToJson)
    .then(data => {
        const ul=document.querySelector("ul");
      const html= `<li>${data.content}</li>`;
      ul.innerHTML+=html;
      });
}
window.onload=function(){
const form=document.querySelector("form");
    const input=document.querySelector("#new-message");
    form.addEventListener("submit",function(e){
        e.preventDefault();
        addNewMessage(input.value);
    });
};
