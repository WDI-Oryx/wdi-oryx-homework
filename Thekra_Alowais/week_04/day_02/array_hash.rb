instructors = ["Jack", "Moath", "Trevor"]
# 1. How would you return the string `"Moath"`?
MoathString = instructors[1]
p MoathString
# 2. How would you add your name to the array?
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
# 1. how would you return the name of the book series?
p book_series[:books]
# 2. how would you return the last name of the author?
p book_series[:author].split.last
# 3. how would you return an array of the books that begin with the letter 'T'?
# p book_series[:books].start_with? "T"
# p book_series.select { |book| book[:books].start_with?("T") }

is = {
  true => "It's true!",
  false => "It's false",
}
p is[2 + 2 == 4]
p is["Erik" == "Jonathan"]
p is[9 > 10]
#Ruby doesn't have falsy value
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
# 1. How would you access Moath's Twitter handle (i.e. the string `"woolymamMoath"`)?
p users[:Moath][:twitter]
# 2. How would you add the number `7` to Jack's favorite numbers?
p users[:Jack][:favorite_numbers].push(7)
# 3. How would you add yourself to the users hash?
p users[:thekra] = {
  twitter: "theekra1",
  favorite_numbers: [5],
}
p users
# 4. How would you return the array of Trevor's favorite numbers?
p users[:Trevor][:favorite_numbers]
# 5. How would you return the smallest of Jack's favorite numbers?
p users[:Jack][:favorite_numbers].min_by { |x| x }
# 6. How would you return an array of Moath's favorite numbers that are also even?
p users[:Moath][:favorite_numbers].map! { |x| x if x.even? }
# 7. How would you return an array of the favorite numbers common to all users?
usersString = users[:Moath][:favorite_numbers]
usersString += users[:Jack][:favorite_numbers]
usersString += users[:Trevor][:favorite_numbers]
usersString += users[:thekra][:favorite_numbers]
p usersString
# 8. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
p usersString.sort.uniq
