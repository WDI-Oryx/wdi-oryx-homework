# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Composer.destroy_all
bach = Composer.create(name: "Bach", nationality: "German", birthday: "1950-01-12")

Composition.destroy_all
Composition.create(title: "Cantatas", description: "love", music_type: "classic", composer_id: bach.id)
