# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Location.create({created_at: Time.now, updated_at: Time.now, name: "restaurant1", city: "seattle", state: "washington", flavor: "celery", price: 50.72})
Location.create({created_at: Time.now, updated_at: Time.now, name: "restaurant2", city: "boise", state: "idaho", flavor: "pizza", price: 12.88})
