# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Message.destroy_all

Message.create(name: "Abdullah", message: "Hey Falah")
Message.create(name: "Falah", message: "Hey Abdullah !!")
Message.create(name: "Abdullah", message: "How are you?")
Message.create(name: "Falah", message: "Good ! what about you")
Message.create(name: "Abdullah", message: "Good, Thanks Allah")