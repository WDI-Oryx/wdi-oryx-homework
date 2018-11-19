function displayData(words){
    const output = document.querySelector("#output");
    output.innerHTML = `<p>${words}</p>`;
}

function onButtonClick() {
    const recognition = new webkitSpeechRecognition();
    recognition.onresult = function(data) {
        displayData(data.results[0][0].transcript);
     
    };
    recognition.start();
  }
  
  const button = document.querySelector(".record");
  
  button.addEventListener("click", onButtonClick);