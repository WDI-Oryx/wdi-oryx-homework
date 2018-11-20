# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Message.destroy_all

Message.create(content: "hello")
Message.create(content: "good moring")
Message.create(content: "Hi")
Message.create(content: "hi there")
Message.create(content: "there")
Message.create(content: "Good afternoon")
