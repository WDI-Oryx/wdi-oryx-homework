// URL
// request
// response
// Remove default form
// get my divs
// first section All msgs
// second New msg create / save in the database
console.log("HI");

const mainURL = "/msgs";

const dataType = "application/json";

function turnResponseToJson(response) {
  return response.json;
}

// First section
function displayMsgs(data) {
  //   for (let msg of data);
  const allMsgs = data
    .map(function(msgs) {
      return `
      <p>${msgs.content}</p> `;
    })
    .join("");
  const msgsDiv = document.querySelector("#msgs");
  msgsDiv.innerHTML = allMsgs;
}

fetch(mainURL)
  .then(turnResponseToJson)
  .then(displayMsgs);
