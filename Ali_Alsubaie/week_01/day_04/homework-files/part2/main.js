function tellFortune(name, jobTitle, location, question) {
	var fortune = [
		"Without a doubt",
		"Yes!",
		"Probably so",
		"It isn't likely",
		"It's possible",
		"Absolutely",
		"Not a chance",
		"Ask again",
		"No",
		"I doubt it",
		"No Way"
	];
	var rand = Math.floor(Math.random() * fortune.length);
	var ret = "The " + jobTitle + ", " + name + " of " + location + ", asks '" + question + "' ... " + fortune[rand];
	return ret;
}

console.log(tellFortune("Moath", "IA", "Dammam", "will I win the lottery this week?"));