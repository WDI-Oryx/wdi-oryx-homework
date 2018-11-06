# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Course.destroy_all

ai = Course.create(name: "Artificial Intelligence", course_id: "IT233", department: "IT")
swe = Course.create(name: "Software Engineering", course_id: "SW213", department: "SWE")

Student.destroy_all

anne = Student.create(name: "Anne", student_id: "391885", semester: "1st", course_id: ai.id)
nancy = Student.create(name: "Nancy", student_id: "392901", semester: "2nd", course_id: swe.id)
