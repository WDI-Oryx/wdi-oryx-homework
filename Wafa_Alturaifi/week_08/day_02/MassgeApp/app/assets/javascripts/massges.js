// URL || Path
//   /massge
// Method
//   GET
// Data Type
//   JSON (Make sure it sends back JSON)
// Params || Body
//   NONE
//   These are the things that you should be looking for:
//      Required Parameters (API Key, etc.)
//      Optional Parameters (search terms, etc.)
const path = "/massges";

function responseToJson(r) {
  return r.json();
}

// function displayResponse(response) {
//   const listofmassge = response.map(
//     massge =>
//       `
//     <li>${massge.body}</li>
//     `
//   );
//   console.log(listofmassge);
// }

function displayAllMassge(data) {
  const listofmassge = data
    .map(function(massge) {
      return `
    <li>${massge.body}</li>
    `;
    })
    .join("");
  const displayAllMassgeDiv = document.querySelector("#all-massges");
  displayAllMassgeDiv.innerHTML = `<ul>${listofmassge}</ul>`;
}

function getAllmassge() {
  fetch(path)
    .then(responseToJson)
    .then(displayAllMassge);
}
function displayMassge(data) {
    const showmassgeDiv = document.querySelector("#show-massge");
    const html = 
}

getAllmassge();
setInterval(getAllmassge, 2000);