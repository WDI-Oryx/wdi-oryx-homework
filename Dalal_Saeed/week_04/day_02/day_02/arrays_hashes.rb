### A. Given the following data structure:

instructors = ["Jack", "Moath", "Trevor"]
# 1. How would you return the string `"Moath"`?
# 2. How would you add your name to the array?

p instructors[1]

instructors.push("Dalal")
p instructors

### B. Given the following data structure:

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

# 1. how would you return the name of the book series?
# 2. how would you return the last name of the author?
# 3. how would you return an array of the books that begin with the letter 'T'?
#p book_series.select { |item| puts item[:books] }
books = book_series[:books]
p book_series[:author]
p books[0].start_with(“a”) 

