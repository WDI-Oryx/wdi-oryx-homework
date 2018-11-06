# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Hobby.destroy_all
User.destroy_all

u1 = User.create(name: "John Johnson", age: 21, gender: "male")
u2 = User.create(name: "Anny Hall", age: 16, gender: "female")
u3 = User.create(name: "Luke Forman", age: 5, gender: "male")
u4 = User.create(name: "Susan Scarlet", age: 78, gender: "female")

h1 = Hobby.create(name: "Swimming", category: "sport", image: "")
h2 = Hobby.create(name: "Drawing", category: "art", image: "")
h3 = Hobby.create(name: "Programming", category: "tech", image: "")
h4 = Hobby.create(name: "Crochet", category: "art", image: "")

u1.hobbies << Hobby.find_by(name: "Swimming")
u2.hobbies << Hobby.find_by(name: "Programming")
u3.hobbies << Hobby.find_by(name: "Drawing")
u4.hobbies << Hobby.find_by(name: "Crochet")
