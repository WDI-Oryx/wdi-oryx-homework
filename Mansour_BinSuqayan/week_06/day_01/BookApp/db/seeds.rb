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
