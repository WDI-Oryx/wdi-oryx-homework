function responseToJSON(response) {
  return response.json();
}
function displayAllTweets(data) {
  const listItem = data
    .map(function(tweet) {
      return `<div id="tweet-${tweet.id}>${tweet.content}</div>`;
    })
    .join("");
  const AllTweets = document.querySelector("#all-tweets");
  AllTweets.innerHTML = `${listItem}`;
}
function displayTweet(data) {
  const showTweet = document.querySelector("#show-tweet");
  const html = `<h3>tweet ${data.id}</h3>
   <p>${data.created_at}</p>
  <p>${data.content}</p>
    <p>${data.like}</p>
    `;
  showTweet.innerHTML = html;
}
function displayNewTweet(data) {}
function getAllTweets() {
  fetch("/tweets")
    .then(responseToJSON)
    .then(displayAllTweets);
}
function getTweet(id) {
  fetch(`/tweets/${id}`)
    .then(responseToJSON)
    .then(displayTweet);
}
function addNewTweet(content) {
  const params = { content: content };
  fetch("/tweets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(params)
  })
    .then(responseToJSON)
    .then(data => {
      console.log(data);
      const html = `<div id="tweet-${data.id}">${data.content}</div>`;
      const newTweet = document.querySelector("#new-tweet");
      newTweet.innerHTML += html;
    });
}
window.onload = function() {
  getAllTweets();
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const input = document.querySelector("#new-tweet");
    const content = input.value;
    addNewTweet(content);
  });
};

getTweet(1);
