function speak(words) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(words);
    utterance.lang = "fr";
    synth.speak(utterance);
  }
  
 
  function displayTranslation(data) {
    const translatedText = data.text[0];
    const translationDiv = document.querySelector("#translation");
    translationDiv.innerHTML = `<h3>${translatedText}</h3>`;
  }
  
  function translate(words) {
    const baseURL = "https://translate.yandex.net/api/v1.5/tr.json/translate";
    const firstLang = document.querySelector("select").value;
    const secondLang = document.querySelector("#destination").value;
    console.log(firstLang, secondLang);
    const lang = `${firstLang}-${secondLang}`;
    const apiKey =
      "trnsl.1.1.20180423T104000Z.92de8d60387621be.caaca061cc50ab7a5e1ed325c018e437dc26eef6";
    const params = `?key=${apiKey}&text=${words}&lang=${lang}`;
    fetch(baseURL + params)
      .then(function(response) {
        return response.json();
      })
      .then(displayTranslation);
  }
  
  function displayData(words) {
    const output = document.querySelector("#output");
    output.innerHTML = `<p>${words}</p>`;
    translate(words);
  }
  
  function onButtonClick() {
    const dropdown = document.querySelector("select");
    const language = dropdown.value;
  
    const recognition = new webkitSpeechRecognition();
    recognition.lang = language;
    recognition.onresult = function(data) {
      const words = data.results[0][0].transcript;
      displayData(words);
      speak(words);
    };
    recognition.start();
  }
  
  const button = document.querySelector(".record");
  
  button.addEventListener("click", onButtonClick);