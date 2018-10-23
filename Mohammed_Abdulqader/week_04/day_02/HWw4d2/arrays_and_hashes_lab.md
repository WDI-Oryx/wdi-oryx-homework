# Array and Hash access

### A. Given the following data structure:

```ruby
instructors = ["Jack", "Moath", "Trevor"]
```

1. How would you return the string `"Moath"`?
2. How would you add your name to the array?

### B. Given the following data structure:

```ruby
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
```

1. how would you return the name of the book series?
2. how would you return the last name of the author?
3. how would you return an array of the books that begin with the letter 'T'?

### C. Given the following data structure:

```ruby
is = {
  true => "It's true!",
  false => "It's false"
 }
```

1. What is the return value of `is[2 + 2 == 4]`?
2. What is the return value of `is["Erik" == "Jonathan"]`?
3. What is the return value of `is[9 > 10]`?
4. What is the return value of `is[0]`?
5. What is the return value of `is["Erik"]`?

how does this work?

### D. Given the following data structure:

```ruby
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
```

1. How would you access Moath's Twitter handle (i.e. the string `"woolymamMoath"`)?
2. How would you add the number `7` to Jack's favorite numbers?
3. How would you add yourself to the users hash?
4. How would you return the array of Trevor's favorite numbers?
5. How would you return the smallest of Jack's favorite numbers?
6. How would you return an array of Moath's favorite numbers that are also even?
7. How would you return an array of the favorite numbers common to all users?
8. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
