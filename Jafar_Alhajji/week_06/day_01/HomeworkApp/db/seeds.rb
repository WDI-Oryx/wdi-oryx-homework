# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Company.destroy_all

company_1 = Company.create(name: "Jafar's Company", type_of_company: "IT Company", phone_number: 0560606546)
company_2 = Company.create(name: "Moath's Company", type_of_company: "IT Company1", phone_number: 0550505050)

Employee.destroy_all

E1 = Employee.create(name: "Ali" ,age: 25, gender: "male",company_id: 3)
E2 = Employee.create(name: "Mohammed" ,age: 25, gender: "male",company_id: 4)



