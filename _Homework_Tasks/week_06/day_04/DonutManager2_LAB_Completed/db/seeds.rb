# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Donut.delete_all

Donut.create({name: "glazed", size: "medium", frosting_type: "classic"})
Donut.create({name: "boston cream", size: "medium", frosting_type: "chocolate"})
Donut.create({name: "bear claws", size: "large", frosting_type: "cinammon"})
Donut.create({name: "old fashioned", size: "small", frosting_type: "classic"})