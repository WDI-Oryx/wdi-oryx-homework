function tellFortune (name, jobTitle, location, question) {
    var fortunes = [
        "Without a doubt",
        "Yes!",
        "Probably so",
        "It isn't likely",
        "it's possible",
        "Absolutely",
        "Not a chance",
        "Ask again",
        "No",
        "I doubt it",
        "No Way"
      ];
      return "The " + jobTitle + ", " + name + " of " + location + ", asks " + question + " ... " + fortunes[Math.floor((Math.random() * fortunes.length))];
}
console.log(tellFortune("Moath", "IA", "Dammam", "will I win the lottery this week?"));
