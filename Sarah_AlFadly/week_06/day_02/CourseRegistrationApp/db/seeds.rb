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
db = Course.create(name: "Database", course_id: "IT222", department: "IT")
wd = Course.create(name: "Web Development", course_id: "IT223", department: "IT")

Student.destroy_all

anne = Student.create(name: "Anne", student_id: "391885", semester: "1st")
nancy = Student.create(name: "Nancy", student_id: "392901", semester: "2nd")

Teacher.destroy_all

Teacher.create(name: "Sally")
Teacher.create(name: "Elisa")
Teacher.create(name: "Martin")
Teacher.create(name: "Henry")

ai.teachers << Teacher.find_by(name: "Sally")
ai.teachers << Teacher.find_by(name: "Elisa")
swe.teachers << Teacher.find_by(name: "Martin")
swe.teachers << Teacher.find_by(name: "Henry")
db.teachers << Teacher.find_by(name: "Sally")
db.teachers << Teacher.find_by(name: "Elisa")
wd.teachers << Teacher.find_by(name: "Martin")
wd.teachers << Teacher.find_by(name: "Henry")

anne.courses << Course.find_by(name: "Artificial Intelligence")
anne.courses << Course.find_by(name: "Software Engineering")
nancy.courses << Course.find_by(name: "Database")
nancy.courses << Course.find_by(name: "Web Development")

# ai.students << Student.find_by(name: "Anne")
# swe.students << Student.find_by(name: "Anne")
# db.students << Student.find_by(name: "Nancy")
# wd.students << Student.find_by(name: "Nancy")
