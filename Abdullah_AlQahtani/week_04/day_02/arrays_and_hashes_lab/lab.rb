instructors = ["Jack", "Moath", "Trevor"]

# A. Given the following data structure:

# How would you return the string "Moath"?
p instructors.at(1)
# How would you add your name to the array?
p instructors.push("Abdullah")

# B. Given the following data structure:
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
    "Time Regained"
  ]
}

#how would you return the name of the book series?
p book_series[:name]
# how would you return the last name of the author?
p book_series[:author].split(" ")[1]
# how would you return an array of the books that begin with the letter 'T'?
p book_series[:books].select { |book| book.start_with?("T")}

# C. Given the following data structure:
is = {
  true => "It's true!", 
  false => "It's false"
 }
# What is the return value of is[2 + 2 == 4]?
p is[2 + 2 == 4]
# What is the return value of is["Erik" == "Jonathan"]?
p is["Erik" == "Jonathan"]
# What is the return value of is[9 > 10]?
p is[9 > 10]
# What is the return value of is[0]?
p is[0]
# What is the return value of is["Erik"]?
p is["Erik"]

# D. Given the following data structure:

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

# How would you access Moath's Twitter handle (i.e. the string "woolymamMoath")?
p users[:Moath][:twitter]
# How would you add the number 7 to Jack's favorite numbers?
p users[:Jack][:favorite_numbers].push(7)
# How would you add yourself to the users hash?
p users[:Abdullah] = {:twitter => "AbdullahIsKing", :favorite_numbers => [1,6,7,9,10]}
# How would you return the array of Trevor's favorite numbers?
p users[:Trevor][:favorite_numbers]
# How would you return the smallest of Jack's favorite numbers?
# How would you return an array of Moath's favorite numbers that are also even?
p users[:Moath][:favorite_numbers]
# How would you return an array of the favorite numbers common to all users?
All_favorite_numbers = users[:Moath][:favorite_numbers] |  users[:Jack][:favorite_numbers] | users[:Trevor][:favorite_numbers]
p All_favorite_numbers
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
p All_favorite_numbers.sort
p users