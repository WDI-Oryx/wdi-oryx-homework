# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Course.destroy_all

course1 = Course.create(name: "Intro To IT", description: "This course tech student the basic of being student with IT Major")
course2 = Course.create(name: "Web Development", description: "This course tech student how to create website and design it")

Student.destroy_all

student1 = Student.create(name: "Abdullah AlQahtani", major: "Information Technology", course_id: 1)
student2 = Student.create(name: "Falah AlQahtani", major: "Computer Science", course_id: 2)