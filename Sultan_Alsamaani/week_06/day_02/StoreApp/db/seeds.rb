# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Store.destroy_all
s1 = Store.create(name: "test1", location: "qassim")
s2 = Store.create(name: "test2", location: "riyadh")
s3 = Store.create(name: "test3", location: "jeddah")

Item.destroy_all
#  t.string "name"
#     t.string "details"
#     t.integer "price"
i11 = s1.items.create(name: "pepsi", details: "soft drink", price:3)
i12 = s1.items.create(name: "sevenUp", details: "soft drink", price:3)
i13 = s1.items.create(name: "chips", details: " just chips", price:1)

i21 = s2.items.create(name: "miranda", details: "soft drink", price:3)
i22 = s2.items.create(name: "cocacola", details: "soft drink", price:3)
i23 = s2.items.create(name: "galaxy", details: "choclate", price:1)

i31 = s3.items.create(name: "ice cream", details: "cold", price:3)

Owner.destroy_all
o1 =Owner.create(name: "owner 1")
o2 =Owner.create(name: "owner 2")
o3 =Owner.create(name: "owner 3")
o4 =Owner.create(name: "owner 4")
o5 =Owner.create(name: "owner 5")

s1.owners << o1
s1.owners << o2
s1.owners << o3
s2.owners << o4
s3.owners << o5

o1.stores << s2
# the_rails_tutorial.genres << Genre.find_by(name: "Tech")

