# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Developer.destroy_all
square_enix = Developer.create(name: "Square Enix", location: "Japan", website: "www.square-enix.com", image: "https://en.wikipedia.org/wiki/Square_Enix#/media/File:Square_Enix_logo.svg")
ea = Developer.create(name: "EA", location: "USA", website: "www.ea.com", image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Electronic-Arts-Logo.svg")

Game.destroy_all
final_fantsy= Game.create(title: "Final Fantsy", developer_id:1)
battel_field= Game.create(title: "Battel Field", developer_id:2)