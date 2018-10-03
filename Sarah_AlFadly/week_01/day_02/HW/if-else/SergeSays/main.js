var message = "Can you help me ?";

if (message.endsWith("?")) {
    console.log("Sure");
} else if (message === message.toLocaleUpperCase()) {
    console.log("Woah, chill out!");
} else if (message === "" && message === " ") {
    console.log("Fine. Be that way!");
} else {
    console.log("Whatever");
}