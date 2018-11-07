# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Author.destroy_all

mona = Author.create(name: "mona", description:"writer")
khaled = Author.create(name: "khaled",  description: "amazing writer")
Story.destroy_all

s1 = Story.create(title: "الزير", body:"بالتنمنكمتخاهملعنبثس",Author_id:mona.id)
s2 = Story.create(title: "ابو زيد",  body: "يفغبعفهغخعهعلغ",Author_id:khaled.id)