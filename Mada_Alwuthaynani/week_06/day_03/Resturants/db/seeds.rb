# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Resturnt.destroy_all
rest1=Resturnt.create(name: 'food1')
rest2=Resturnt.create(name: 'food2')
rest3=Resturnt.create(name: 'food3')
User.destroy_all
user1=User.create(username: 'Mada')
user2=User.create(username: 'Reem')
user3=User.create(username: 'Sarah')

rest1.users<<User.find_by(username: 'Mada')
rest1.users<<User.find_by(username: 'Reem')
rest2.users<<User.find_by(username: 'Sarah')
rest3.users<<User.find_by(username: 'Sarah')
rest3.users<<User.find_by(username: 'Mada')
rest3.users<<User.find_by(username: 'Reem')