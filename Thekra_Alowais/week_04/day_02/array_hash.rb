instructors = ["Jack", "Moath", "Trevor"]
MoathString = instructors[1]
p MoathString

myName = instructors.push("Thekra")
p myName
######
book_series = {
  name: "In Search of Lost Time",
  author: "Marcel Proust",
  books: [
    "Swann's Way",
    "In the Shadow of Young Girls in Flower",
    "The Guermantes Way",
    "Sodom and Gomorrah",
    "The Prisoner",
    "The Fugitive",
    "Time Regained",
  ],
}

book_series.select { |book| book[:books] }
