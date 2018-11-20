function responseToJson(response){
    return response.json();
    }
    function displayAllMessages(data){
   const ListItems= data.map(function(message){
       return `<li id=message-${message.id}>${message.content}</li>`;
   })
   .join("")
   console.log(ListItems);
    const allMessageDiv=document.querySelector("#all-messages");
    allMessageDiv.innerHTML=`<ul>${ListItems}</ul>`;   }
 function getAllMessages(){
 fetch("/messages")
 .then(responseToJson)
 .then(displayAllMessages);
 }
 function getMessage(id){
    fetch(`/messages/${id}`)
    .then(responseToJson)
    .then(function(data){
        const showMessagediv=document.querySelector("#show-message");
        showMessagediv.innerHTML=`<h1>Message ${id}</h1>
        <h1>${data.content}</h1>`;
    })
 }
 
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
      const html= `<li id=message-${data.id}>${data.content}</li>`;
      ul.innerHTML+=html;
      });
 }
 window.onload=function(){
    getAllMessages();
    const form=document.querySelector("form");
    const input=document.querySelector("#new-message");
    form.addEventListener("submit",function(e){
        e.preventDefault();
        addNewMessage(input.value);
    });
    const allMessagesDiv = document.querySelector("#all-messages");
    allMessagesDiv.addEventListener("click", function(e) {
      var clickedli=e.target;
      const id = clickedli.id.replace("message-","");
      getmessage(id);
    });
 };