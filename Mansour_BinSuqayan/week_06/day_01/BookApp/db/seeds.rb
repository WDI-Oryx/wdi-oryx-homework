# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Author.destroy_all

doug = Author.create(name: "Douglas Hofstadter", dob: "1945-02-15", location: "New York", description: "Just awesome", image: "")

james = Author.create(name: "James Joyce", dob: "1941-01-13", location: "Zurich", description: "Jimmyyyyy", image: "")

Book.destroy_all

geb = Book.create(title: "Godel, Escher and Bach", image: "", blurb: "The best", author_id: doug.id)

ulysses = Book.create(title: "Ulysses", image: "", blurb: "Pretty great", author_id: james.id)

Genre.destroy_all

genres = ["History", "Comedy", "Horror", "Theoretical", "Science", "Tech", "JS", "HTML", "CSS", "Ruby", "Ruby on Rails"]

genres.each do |g|
  Genre.create(name: g)
end

michael = Author.create(name: " Michael Hartl", location: "California", image: "", dob: "1970-01-01", description: "A lovely man")

the_rails_tutorial = Book.create(title: "The Ruby on Rails Tutorial", image: "", blurb: "the best way to learn eCommercw stuff with Rails", author_id: michael.id)

the_rails_tutorial.genres << Genre.find_by(name: "Tech")
the_rails_tutorial.genres << Genre.find_by(name: "Ruby")
the_rails_tutorial.genres << Genre.find_by(name: "Ruby on Rails")
the_rails_tutorial.genres << Genre.find_by(name: "Theoretical")
