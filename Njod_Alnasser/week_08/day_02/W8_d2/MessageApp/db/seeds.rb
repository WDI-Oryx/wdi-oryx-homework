# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Message.destroy_all 
Message.create(content:"Hello, Where are you?")
Message.create(content:"Hi")
Message.create(content:"Njod, Where is your home?")
Message.create(content:"wooow !!")
Message.create(content:"are you eating??")
