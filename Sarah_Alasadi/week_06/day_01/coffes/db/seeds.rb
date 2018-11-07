# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Menu.destroy_all
black = Menu.create(name: "Amricano", size: "M", description: "BlackCoffe")
latt = Menu.create(name: "Latte", size: "M", description: "coffe with Milk")
