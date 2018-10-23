instructors = ["Jack", "Moath", "Trevor"]

# How would you return the string "Moath"?
puts instructors[1]
# How would you add your name to the array?
instructors.push("Sami")

p instructors

#B. Given the following data structure:
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
# how would you return the name of the book series?
p book_series[:books]
# how would you return the last name of the author?
puts book_series[:author].split(" ")[1]
# how would you return an array of the books that begin with the letter 'T'?
book_series[:books].each do |el|
  if el.start_with?("t") || el.start_with?("T")
    puts el
  end
end

is = {
  true => "It's true!",
  false => "It's false",
}

p is[2 + 2 == 4]
p is["Erik" == "Jonathan"]
p is[9 > 10]
p is[0]
p is["Erik"]

users = {
  "Moath": {
    twitter: "woolymamMoath",
    favorite_numbers: [12, 42, 75],
  },
  "Jack": {
    twitter: "threequal",
    favorite_numbers: [8, 42, 12],
  },
  "Trevor": {
    :twitter => "T$$'s_Romantic_Poetry",
    :favorite_numbers => [12, 14, 85],
  },
}

#   How would you access Moath's Twitter handle (i.e. the string "woolymamMoath")?
puts users[:Moath][:twitter]
#   How would you add the number 7 to Jack's favorite numbers?
p users[:Jack][:favorite_numbers].push(7)
#   How would you add yourself to the users hash?

#   How would you return the array of Trevor's favorite numbers?
#   How would you return the smallest of Jack's favorite numbers?
#   How would you return an array of Moath's favorite numbers that are also even?
#   How would you return an array of the favorite numbers common to all users?
#   How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
