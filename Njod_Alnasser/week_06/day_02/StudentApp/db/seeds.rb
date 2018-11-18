# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Student.destroy_all

 student1= Student.create(id: "0891", first_name:"Njod", last_name:"Alnasser")

 student2= Student.create(id: "10762", first_name:"Hessah", last_name:"Alnasser")

Classe.destroy_all

 class1=Classe.(id: "1", title:"math", descrption:"Calaculator")

 class2=Classe.(id: "2", title:"Art", descrption:"dance")

