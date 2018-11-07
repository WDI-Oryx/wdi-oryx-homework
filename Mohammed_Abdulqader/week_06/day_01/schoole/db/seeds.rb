# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Teacher.destroy_all

doug = Teacher.create(name: "moath", dob: "1988-06-15", location: "KSA", course: "math")
james = Teacher.create(name: "Jak", dob: "1977-01-13", location: "ustralia", course: "web develober")

Student.destroy_all

geb = Student.create(name: "mohammed", dob: "1992-06-15", collige: "YUC", major: "CE", teacher_id: doug.id)
ulysses = Student.create(name: "jafar", dob: "1990-01-13", collige: "KFU", major: "CS", teacher_id: james.id)
