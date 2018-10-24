instructors = ["Jack", "Moath", "Trevor"]

# How would you return the string "Moath"?

p instructors[1]

#How would you add your name to the array?
p instructors.push("Mansour")


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
 
p book_series[:books]

#how would you return the last name of the author?

p book_series[:author].split(" ")[1]


# how would you return an array of the books that begin with the letter 'T'?

p book_series[:books].select { |book| book[0]=="T"}


is = {
    true => "It's true!", 
    false => "It's false"
   }

# What is the return value of is[2 + 2 == 4]

p is[2 + 2 == 4]

#What is the return value of is["Erik" == "Jonathan"]?
 p is["Erik" == "Jonathan"]

#What is the return value of is[9 > 10]?

p is[9 > 10]

#What is the return value of is[0]?
p is[0]

#What is the return value of is["Erik"]

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

  # How would you access Moath's Twitter handle (i.e. the string "woolymamMoath")?
