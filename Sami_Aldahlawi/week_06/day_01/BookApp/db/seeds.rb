# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Author.destroy_all
doug = Author.create(name: "Dougles Hofstadter", dob: "1945-01-15", location: "New York", description: "Just awesome", image: "")
james = Author.create(name: "James Joyce", dob: "1941-01-13", location: "Zurich", description: "Jummyyy", image: "")

Book.destroy_all
geb = Book.create(title: "Godel, Eschar and Bach", image: "", blurb: "The best", author_id: doug.id)
ulysses = Book.create(title: "Ulysses", image: "", blurb: "Pretty great", author_id: james.id)

genres = ["History", "Comedy", "Horror", "Science", "Tech", "JS", "CSS", "Ruby", "Ruby on Rails", "Theoretical"]

genres.each do |g|
  Genre.create(name: g)
end

micheal = Author.create(name: "Micheal Hartl", dob: "1970-01-01", location: "California", description: "A lovely man", image: "")
the_rails_tutorial = Book.create(title: "The Ruby on Rails Tutorial", image: "", blurb: "The best way to learn eCommerce stuff with Rails", author_id: micheal.id)
the_rails_tutorial.genres << Genre.find_by(name: "Tech")
the_rails_tutorial.genres << Genre.find_by(name: "Ruby")
the_rails_tutorial.genres << Genre.find_by(name: "Ruby on Rails")
the_rails_tutorial.genres << Genre.find_by(name: "Theoretical")
